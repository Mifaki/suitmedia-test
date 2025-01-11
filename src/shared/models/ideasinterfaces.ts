import type {
  IGeneralAPIResponse,
  IGeneralImage,
  IMeta,
  IPaginationLink,
} from './generalinterfaces';

export interface IRootIdea {
  id: number;
  slug: string;
  title: string;
  content: string;
  published_at: string;
  deleted_at?: string;
  created_at: string;
  updated_at: string;
  small_image?: IGeneralImage[];
  medium_image?: IGeneralImage[];
}

export interface IAllIdeaResponseRoot extends IGeneralAPIResponse {
  data: IRootIdea[];
  links: IPaginationLink;
  meta: IMeta;
}
