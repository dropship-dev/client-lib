import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { ComboItemTrackingDto } from './ComboItemTrackingDto';
import type { OrderItemTrackingDto } from './OrderItemTrackingDto';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
export type UpdateOrderTrackingDto = {
    email: string;
    phoneNumber?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    orderItems?: Array<OrderItemTrackingDto>;
    comboItems?: Array<ComboItemTrackingDto>;
    shippingInfo?: PrismaJson_BillingInfo;
    token: string;
    clientId?: string;
    merchantId?: string;
    payment: _36_Enums_PaymentType;
};
