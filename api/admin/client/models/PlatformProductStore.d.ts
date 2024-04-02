import type { Store } from './Store';
export type PlatformProductStore = (Store & {
    Product: Array<{
        permalink: string;
        isActive: boolean;
        id: number;
        ProductVariant: Array<{
            price: number;
        }>;
    }>;
} & {
    minMinSellingPrice: number;
    maxMinSellingPrice: number;
    minFulfillmentPrice: number;
    maxFulfillmentPrice: number;
    statusOnStore: boolean;
});
