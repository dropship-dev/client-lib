import type { GetTopLandingPageResultDto } from './GetTopLandingPageResultDto';
export type GetPaginateTopLandingPageResultDto = {
    data: Array<GetTopLandingPageResultDto>;
    total: number;
    prePageIndex: number | null;
    nextPageIndex: number | null;
};
