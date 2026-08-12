import { useCallback, useEffect, useRef, useState } from 'react';

import { ApiError, toApiError } from './api-error';
import { useDataContext } from './data-provider';

type ApiState<T> = {
  data: T | null;
  error: ApiError | null;
  isLoading: boolean;
};

const BASE_URL = import.meta.env.VITE_API_URL;

function useApi<T>(path: string): ApiState<T> {
  const { read, write } = useDataContext();
  const [state, setState] = useState<ApiState<T>>({
    data: null,
    error: null,
    isLoading: true,
  });
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const load = useCallback(async () => {
    const cached = read<T>(path);

    if (cached) {
      setState({ data: cached, error: null, isLoading: false });
      return;
    }

    setState((previous) => ({ ...previous, isLoading: true, error: null }));

    try {
      const response = await fetch(`${BASE_URL}${path}`, {
        headers: { Accept: 'application/json' },
      });
      const body = (await response.json()) as T & {
        error?: { message?: string };
      };

      if (!response.ok) {
        throw new ApiError(
          body?.error?.message ?? `Request failed with status ${response.status}.`,
          response.status,
        );
      }

      write(path, body);

      if (isMounted.current) {
        setState({ data: body, error: null, isLoading: false });
      }
    } catch (error) {
      if (isMounted.current) {
        setState({ data: null, error: toApiError(error), isLoading: false });
      }
    }
  }, [path, read, write]);

  useEffect(() => {
    void load();
  }, [load]);

  return state;
}

export { useApi, type ApiState };
