import type { ProductListType } from './ProductListType';
export type GetAllProductType = {
    orderBy?: string;
    nextPageIndex: number | null;
    prePageIndex: number | null;
    total: number;
    data: Array<ProductListType>;
};
