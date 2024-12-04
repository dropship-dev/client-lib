import type { _36_Enums_StoreStatus } from './_36_Enums_StoreStatus';
import type { FraudStatusType } from './FraudStatusType';
export type GetAllStoresDto = {
    fulfillmentAgencyId?: number;
    pageSize?: number;
    status?: Array<_36_Enums_StoreStatus>;
    periodFrom?: string;
    nextPageIndex?: string;
    name?: string;
    userId?: string;
    paymentGatewayIds?: Array<number>;
    platformProductId?: number;
    referralCode?: string;
    fraudStatus?: Array<FraudStatusType>;
};
