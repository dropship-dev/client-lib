import type { FulfillmentStatus } from './FulfillmentStatus';
export type UpdateFulFillmentStatusDto = {
    orders: Array<{
        orderItems: Array<{
            tracking?: string;
            fulfillmentStatus: FulfillmentStatus;
            id: string;
        }>;
        id: string;
    }>;
};
