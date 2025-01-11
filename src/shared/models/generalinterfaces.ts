export interface IPaginationLink {
  first: string;
  last: string;
  prev?: string;
  next?: string;
}

export interface IMetaLink {
  url?: string;
  label: string;
  active: boolean;
}

export interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: IMetaLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface IGeneralImage {
  id: number;
  mime: string;
  file_name: string;
  url: string;
}

export interface IGeneralAPIResponse {
  succes: boolean;
  message?: string;
}

export interface TGeneralFilter {
  page?: number;
  pageSize?: number;
  append?: string[];
  sort?: 'published_at' | '-published_at';
}
