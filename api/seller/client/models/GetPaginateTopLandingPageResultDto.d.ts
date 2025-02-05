import type { GetTopLandingPageResultDto } from './GetTopLandingPageResultDto';
export type GetPaginateTopLandingPageResultDto = {
    data: Array<GetTopLandingPageResultDto>;
    total: number;
    prePageIndex: string | null;
    nextPageIndex: string | null;
};
