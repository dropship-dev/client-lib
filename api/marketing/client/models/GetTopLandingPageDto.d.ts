export type GetTopLandingPageDto = {
    storeId: string;
    startDate?: string;
    endDate?: string;
    limit?: number;
    cursor?: string;
};
