import type { FulfillmentAgency } from './FulfillmentAgency';
import type { FulfillmentAgencySetting } from './FulfillmentAgencySetting';
export type FulfillmentAgencyWithSetting = (FulfillmentAgency & {
    Setting: FulfillmentAgencySetting;
});
