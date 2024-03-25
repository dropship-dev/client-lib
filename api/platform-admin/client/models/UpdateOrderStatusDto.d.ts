import type { FulfillmentStatus } from './FulfillmentStatus';
export type UpdateOrderStatusDto = {
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
