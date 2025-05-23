import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
import type { ComboItemDto } from './ComboItemDto';
import type { CreateAbandonmentOrder } from './CreateAbandonmentOrder';
import type { OrderItemDto } from './OrderItemDto';
import type { PrismaJson_BillingInfo } from './PrismaJson_BillingInfo';
export type CreateOrderDto = {
    shippingInfo?: PrismaJson_BillingInfo;
    billingInfo?: PrismaJson_BillingInfo;
    note?: string;
    domain?: string;
    clientId?: string;
    merchantId?: string;
    payment: _36_Enums_PaymentType;
    orderItems?: Array<OrderItemDto>;
    comboItems?: Array<ComboItemDto>;
    referrer?: string;
    timezoneLocalBrowser?: string;
    fingerPrint?: string;
    cloverOrder?: {
        tokenCard: string;
        orderSystemId: string;
    };
    track?: {
        token: string;
        id: number;
    };
    abandonment?: CreateAbandonmentOrder;
    utmLink?: string;
};
