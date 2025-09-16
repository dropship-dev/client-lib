import type { _36_Enums_FulfillmentStatus } from './_36_Enums_FulfillmentStatus';
export type UpdateOrderStatusDto = {
    orders: Array<{
        orderItems: Array<{
            carrier?: string;
            tracking?: string;
            fulfillmentStatus?: _36_Enums_FulfillmentStatus;
            id: string;
        }>;
        id: string;
    }>;
};
