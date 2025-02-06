export type UpdateHistoryTrackingOrderDto = {
    value?: string;
    files?: Array<{
        url: string;
        name: string;
    }>;
};
