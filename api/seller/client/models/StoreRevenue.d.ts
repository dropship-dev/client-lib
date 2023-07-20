import type { Store } from './Store';
import type { StoreRole } from './StoreRole';
export type StoreRevenue = (Store & {
    userRole?: StoreRole;
    noOfOrders: number;
    revenue: number;
});
