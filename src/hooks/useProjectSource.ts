import { useCallback, useEffect, useRef, useState } from 'react';
import type { CacheStrategy, Project, ProjectDataSource } from '../types';

interface CacheEntry {
  data: Project[];
  timestamp: number;
}

// Module-level cache persists across component remounts (client-side navigation)
const sourceCache = new Map<string, CacheEntry>();

export interface UseProjectSourceOptions {
  dataSource?: ProjectDataSource;
  cacheStrategy?: CacheStrategy;
  cacheKey?: string;
  onError?: (error: Error) => void;
}

export interface UseProjectSourceResult {
  projects: Project[] | undefined;
  isLoading: boolean;
  isValidating: boolean;
  error: Error | null;
  refresh: () => void;
}

function normalizeProjects(result: unknown): Project[] {
  if (Array.isArray(result)) return result;
  if (result && typeof result === 'object') {
    const obj = result as { projects?: Project[]; data?: Project[] };
    if (Array.isArray(obj.projects)) return obj.projects;
    if (Array.isArray(obj.data)) return obj.data;
  }
  return [];
}

async function resolveDataSource(dataSource: ProjectDataSource): Promise<Project[]> {
  if (typeof dataSource === 'function') {
    return normalizeProjects(await dataSource());
  }
  const response = await fetch(dataSource);
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status} ${response.statusText}`);
  }
  return normalizeProjects(await response.json());
}

export function useProjectSource({
  dataSource,
  cacheStrategy = 'swr',
  cacheKey,
  onError,
}: UseProjectSourceOptions): UseProjectSourceResult {
  const key = cacheKey ?? (typeof dataSource === 'string' ? dataSource : undefined);
  const cached = key ? sourceCache.get(key) : undefined;

  const [projects, setProjects] = useState<Project[] | undefined>(cached?.data);
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const mountedRef = useRef(false);
  const onErrorRef = useRef(onError);
  onErrorRef.current = onError;

  const load = useCallback(
    async (revalidate: boolean) => {
      if (!dataSource || typeof window === 'undefined') return;
      if (revalidate) {
        setIsValidating(true);
      } else {
        setIsLoading(true);
      }
      try {
        const result = await resolveDataSource(dataSource);
        if (!mountedRef.current) return;
        setProjects(result);
        setError(null);
        if (key && cacheStrategy === 'swr') {
          sourceCache.set(key, { data: result, timestamp: Date.now() });
        }
      } catch (e) {
        const err = e instanceof Error ? e : new Error(String(e));
        if (mountedRef.current) setError(err);
        onErrorRef.current?.(err);
      } finally {
        if (mountedRef.current) {
          setIsLoading(false);
          setIsValidating(false);
        }
      }
    },
    [dataSource, key, cacheStrategy]
  );

  useEffect(() => {
    mountedRef.current = true;
    if (!dataSource) {
      setProjects(undefined);
      setError(null);
      setIsLoading(false);
      setIsValidating(false);
      return;
    }
    const hasCached = Boolean(key && cacheStrategy === 'swr' && sourceCache.has(key));
    load(hasCached);
    return () => {
      mountedRef.current = false;
    };
  }, [dataSource, key, cacheStrategy, load]);

  const refresh = useCallback(() => {
    load(false);
  }, [load]);

  return { projects, isLoading, isValidating, error, refresh };
}
