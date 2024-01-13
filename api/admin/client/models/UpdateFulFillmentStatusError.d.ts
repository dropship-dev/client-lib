export type UpdateFulFillmentStatusError = {
    OrderId: string;
    ItemCode: string;
    TrackingNumber?: string;
    Carrier?: string;
    Reason?: string;
};
