import { createContext, useCallback, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import { readStoredEntry, writeStoredEntry } from './storage';

const DEFAULT_STORAGE_PREFIX = 'metatech-cache:';

type DataContextValue = {
  read: <T>(path: string) => T | null;
  write: (path: string, data: unknown) => void;
};

const DataContext = createContext<DataContextValue | null>(null);

function DataProvider({
  staleTime,
  storagePrefix = DEFAULT_STORAGE_PREFIX,
  children,
}: {
  staleTime: number;
  storagePrefix?: string;
  children: ReactNode;
}) {
  const read = useCallback(
    <T,>(path: string): T | null => {
      const entry = readStoredEntry(`${storagePrefix}${path}`);

      if (!entry || Date.now() - entry.fetchedAt >= staleTime) {
        return null;
      }

      return entry.data as T;
    },
    [staleTime, storagePrefix],
  );

  const write = useCallback(
    (path: string, data: unknown) => {
      writeStoredEntry(`${storagePrefix}${path}`, {
        data,
        fetchedAt: Date.now(),
      });
    },
    [storagePrefix],
  );

  const value = useMemo(() => ({ read, write }), [read, write]);

  return <DataContext value={value}>{children}</DataContext>;
}

function useDataContext() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataContext must be used inside a <DataProvider>.');
  }

  return context;
}

export { DataProvider, useDataContext, type DataContextValue };
