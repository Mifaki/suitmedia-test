import { useQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { useCallback, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getAllIdea } from '@/shared/actions/ideaService';
import type { TGeneralFilter } from '@/shared/models/generalinterfaces';
import type { IAllIdeaResponseRoot } from '@/shared/models/ideasinterfaces';
import { formatFilter } from '@/shared/util/formatFilter';

export const useIdeaQuery = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialFilterState: TGeneralFilter = {
    page: 1,
    pageSize: 10,
    sort: '-published_at',
  };

  const ideaKeys = {
    all: ['ideas'],
    lists: () => [...ideaKeys.all, 'list'],
    list: (filters: TGeneralFilter) => [...ideaKeys.lists(), filters],
  };

  const [queryIdea, setQueryIdea] = useState<TGeneralFilter>(() => ({
    page: Number(searchParams.get('page[number]')) ?? initialFilterState.page,
    pageSize: Number(searchParams.get('page[size]')) ?? initialFilterState.pageSize,
    sort: (searchParams.get('sort') as TGeneralFilter['sort']) ?? initialFilterState.sort,
  }));

  const debouncedQuery = useDebounce(queryIdea, 1500);

  const updateUrl = useCallback(
    (query: TGeneralFilter) => {
      const newSearchParams = new URLSearchParams();
      const queryParams = formatFilter(query);

      Object.entries(queryParams).forEach(([key, value]) => {
        if (value !== undefined) {
          newSearchParams.set(key, value);
        }
      });

      router.push(`${window.location.pathname}?${newSearchParams.toString()}`, {
        scroll: false,
      });
    },
    [router]
  );

  const { data, error, isLoading, isFetching, isError } = useQuery<IAllIdeaResponseRoot>({
    queryKey: ideaKeys.list(debouncedQuery),
    queryFn: async () => {
      const queryParams = formatFilter(debouncedQuery);
      updateUrl(debouncedQuery);

      const response = await getAllIdea({
        ...queryParams,
        append: ['small_image', 'medium_image'],
      });

      if (!response.success) {
        throw new Error(response.message ?? 'Failed to fetch ideas');
      }

      return response as IAllIdeaResponseRoot;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const handleFilter = useCallback((value: Partial<TGeneralFilter>) => {
    setQueryIdea((prev) => ({
      ...prev,
      ...value,
    }));
  }, []);

  return {
    data,
    error,
    isError,
    isLoading: isLoading || isFetching,
    setQueryIdea,
    queryIdea,
    handleFilter,
  };
};
