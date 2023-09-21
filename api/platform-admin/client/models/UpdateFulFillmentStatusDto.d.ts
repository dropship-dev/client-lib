import type { FulfillmentStatus } from './FulfillmentStatus';
export type UpdateFulFillmentStatusDto = {
    orders: Array<{
        orderItems: Array<{
            carrier?: string;
            tracking?: string;
            fulfillmentStatus?: FulfillmentStatus;
            id: string;
        }>;
        id: string;
    }>;
};
