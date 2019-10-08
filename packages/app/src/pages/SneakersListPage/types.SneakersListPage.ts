import { Sneaker } from '~/types/Sneaker';

export type HookData = {
  totalCount: number,
  sortBy: string,
  sneakers: Array<Sneaker>,
  loading: boolean,
}

export type Callbacks = {
  [key: string]: (param: any) => void,
}

export type JsonServerParams = {
  _limit?: number,
  _start?: number,
  _sort?: 'release_date_unix' | 'retail_price_cents',
  _order?: 'asc' | 'desc',
  status?: 'active' | 'inactive',
  release_date_unix_lte?: number,
  release_date_unix_gte?: number,
  retail_price_cents_ne?: number | 'null',
}
