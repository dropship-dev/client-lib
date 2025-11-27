export type GetAccountancyDto = {
    fulfillmentAgencyId: number;
    startDate: string;
    endDate?: string;
    search?: string;
    pageSize: number;
    nextPageIndex?: number;
    includeOnHold?: boolean;
};
