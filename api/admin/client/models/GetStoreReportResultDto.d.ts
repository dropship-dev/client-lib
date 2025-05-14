export type GetStoreReportResultDto = {
    data: Array<{
        total: number;
        originalProfit: number | null;
        createdAt: string;
        id: string;
        Store: {
            name: string;
        };
    }>;
    total: number;
    prePageIndex: string | null;
    nextPageIndex?: string | null;
    orderBy: string;
};
