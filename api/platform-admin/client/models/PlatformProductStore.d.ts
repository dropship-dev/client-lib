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
    minPriceOnStore: number;
    maxPriceOnStore: number;
    statusOnStore: boolean;
});
