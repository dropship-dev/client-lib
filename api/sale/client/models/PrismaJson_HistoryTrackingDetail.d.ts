import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
export type PrismaJson_HistoryTrackingDetail = {
    tracking?: string;
    orderItemId?: string;
    quantity?: number;
    productVariant?: string;
    productName?: string;
    file?: {
        name: string;
        url: string;
    };
    reasonRefund?: string;
    amount?: number;
    paymentType?: _36_Enums_PaymentType;
    email?: string;
    fulfillmentAgencyName?: string;
    customerName?: string;
    value?: string;
};
