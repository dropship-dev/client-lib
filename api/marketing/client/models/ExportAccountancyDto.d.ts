export type ExportAccountancyDto = {
    exportedFilename: string;
    fulfillmentAgencyId: number;
    startDate?: string;
    endDate?: string;
    storeId?: string;
    includeOnHold?: boolean;
    search?: string;
};
