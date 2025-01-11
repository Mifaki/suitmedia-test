import type { TGeneralFilter } from '../models/generalinterfaces';

export const formatFilter = (filters: TGeneralFilter): Record<string, string> => {
  const queryParams: Record<string, string> = {
    'page[number]': String(filters.page),
    'page[size]': String(filters.pageSize),
    sort: filters.sort ?? '-published_at',
  };

  if (filters.append?.length) {
    queryParams.append = filters.append.join(',');
  }

  return queryParams;
};
