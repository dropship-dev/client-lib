import type { ComboItemTrackingDto } from './ComboItemTrackingDto';
import type { OrderItemTrackingDto } from './OrderItemTrackingDto';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
export type CreateOrderTrackingDto = {
    timezoneLocalBrowser?: string;
    orderItems?: Array<OrderItemTrackingDto>;
    comboItems?: Array<ComboItemTrackingDto>;
    storeId: string;
    email?: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    shippingInfo?: PrismaJson_BillingInfo;
};
