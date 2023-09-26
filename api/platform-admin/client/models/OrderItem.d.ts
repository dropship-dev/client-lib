import type { FulfillmentStatus } from './FulfillmentStatus';
/**
 * Model OrderItem
 */
export type OrderItem = {
    updatedAt: string;
    createdAt: string;
    currencyId: number;
    orderId: string;
    variantComboId: number | null;
    productVariantId: number | null;
    productId: number;
    tracking: string | null;
    status: FulfillmentStatus;
    platformPrice: number;
    quantity: number;
    priceUSD: number;
    price: number;
    id: string;
};
