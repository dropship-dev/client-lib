import type { ComboItemTrackingDto } from './ComboItemTrackingDto';
import type { OrderItemTrackingDto } from './OrderItemTrackingDto';
export type UpdateOrderTrackingDto = {
    email: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    orderItems?: Array<OrderItemTrackingDto>;
    comboItems?: Array<ComboItemTrackingDto>;
    token: string;
};
