import type { PaymentType } from './PaymentType';
import type { Store } from './Store';
import type { StoreRole } from './StoreRole';
export type StoreRevenue = (Store & {
    userRole?: StoreRole;
    noOfOrders: number;
    revenue: number;
    Payment: Array<{
        publishableKey: string;
        name: string;
        type: PaymentType;
        id: number;
    }>;
});
