import type { FraudDetection } from './FraudDetection';
import type { FraudStatusType } from './FraudStatusType';
import type { FulfillmentAgencyWithSetting } from './FulfillmentAgencyWithSetting';
import type { SimplifiedPayment } from './SimplifiedPayment';
import type { Store } from './Store';
import type { StoreUser } from './StoreUser';
import type { Wallet } from './Wallet';
export type StoreData = (Store & {
    Payment: Array<SimplifiedPayment>;
    fraudStatus?: FraudStatusType;
    Wallet: Array<Wallet>;
    FraudDetection: Array<FraudDetection>;
    StoreUser: Array<StoreUser>;
    FulfillmentAgency: FulfillmentAgencyWithSetting | null;
});
