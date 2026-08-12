type StoredEntry = {
  data: unknown;
  fetchedAt: number;
};

const getStorage = () => {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
};

export const readStoredEntry = (key: string): StoredEntry | null => {
  const storage = getStorage();

  if (!storage) {
    return null;
  }

  try {
    const raw = storage.getItem(key);

    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as StoredEntry;

    if (typeof parsed?.fetchedAt !== 'number') {
      return null;
    }

    return parsed;
  } catch {
    storage.removeItem(key);
    return null;
  }
};

export const writeStoredEntry = (key: string, entry: StoredEntry) => {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(key, JSON.stringify(entry));
  } catch {
    storage.removeItem(key);
  }
};

export const removeStoredEntry = (key: string) => {
  getStorage()?.removeItem(key);
};

export const removeStoredEntries = (prefix: string) => {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  const keys = Object.keys(storage).filter((key) => key.startsWith(prefix));

  for (const key of keys) {
    storage.removeItem(key);
  }
};

export type { StoredEntry };
