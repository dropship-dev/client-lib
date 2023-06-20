import type { FulfillmentStatus } from './FulfillmentStatus';
/**
 * Model OrderItem
 */
export type OrderItem = {
    updatedAt: string;
    createdAt: string;
    currencyId: number;
    orderId: string;
    productVariantId: number;
    tracking: string | null;
    status: FulfillmentStatus;
    quantity: number;
    priceUSD: number;
    price: number;
    id: number;
};
