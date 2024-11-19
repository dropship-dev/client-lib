import type { FraudStatusType } from './FraudStatusType';
import type { StoreStatus } from './StoreStatus';
export type GetAllStoresDto = {
    fulfillmentAgencyId?: number;
    pageSize?: number;
    status?: Array<StoreStatus>;
    periodFrom?: string;
    nextPageIndex?: string;
    name?: string;
    userId?: string;
    paymentGatewayIds?: Array<number>;
    platformProductId?: number;
    referralCode?: string;
    fraudStatus?: Array<FraudStatusType>;
};
