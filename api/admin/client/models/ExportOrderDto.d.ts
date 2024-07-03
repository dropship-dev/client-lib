import type { FulfillmentStatus } from './FulfillmentStatus';
import type { OrderDisputeStatus } from './OrderDisputeStatus';
import type { TransactionStatus } from './TransactionStatus';
export type ExportOrderDto = {
    exportedFilename: string;
    fulfillmentAgencyId?: number;
    storeId?: string;
    paymentStatus?: Array<TransactionStatus>;
    fulfillmentStatus?: Array<FulfillmentStatus>;
    search?: string;
    productName?: string;
    startDate?: string;
    endDate?: string;
    startTotal?: number;
    endTotal?: number;
    gateway?: Array<number>;
    disputeStatus?: Array<OrderDisputeStatus>;
    latestStat?: boolean;
};
