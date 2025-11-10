import type { ListAdvertorialPagesResponse } from './ListAdvertorialPagesResponse';
export type ResponsePagingWithCursor_ListAdvertorialPagesResponse_ = {
    orderBy?: string;
    nextPageIndex?: (string | number) | null;
    prePageIndex?: (string | number) | null;
    total: number;
    data: ListAdvertorialPagesResponse;
};
