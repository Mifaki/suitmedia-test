import type { TGeneralFilter } from '../models/generalinterfaces';

export const formatFilter = (query: TGeneralFilter): Record<string, string> => {
  const queryParams: Record<string, string> = {
    'page[number]': String(Math.max(1, query.page ?? 1)),
    'page[size]': String(Math.max(10, query.pageSize ?? 10)),
    sort: query.sort ?? '-published_at',
  };

  if (query.append?.length) {
    queryParams.append = query.append.join(',');
  }

  return queryParams;
};
