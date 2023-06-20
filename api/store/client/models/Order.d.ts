import type { FulfillmentStatus } from './FulfillmentStatus';
/**
 * Model Order
 */
export type Order = {
    updatedAt: string;
    createdAt: string;
    currencyId: number;
    transactionId: number;
    storeId: number;
    fulfillmentStatus: FulfillmentStatus;
    noItems: number;
    totalUSD: number;
    total: number;
    shippingFee: number;
    note: string | null;
    country: string;
    zipCode: string;
    province: string;
    city: string;
    address2: string;
    address1: string;
    phone: string | null;
    email: string;
    name: string;
    id: string;
};
