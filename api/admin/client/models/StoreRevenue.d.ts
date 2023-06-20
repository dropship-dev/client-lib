import type { Store } from './Store';
export type StoreRevenue = (Store & {
    noOfOrders: number;
    revenue: number;
});
