import type { GetTopLandingPageResultDto } from './GetTopLandingPageResultDto';
export type GetPaginateTopLandingPageResultDto = {
    data: Array<GetTopLandingPageResultDto>;
    preCursor: boolean;
    nextCursor: string | null;
};
