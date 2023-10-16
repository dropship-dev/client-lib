import type { FulfillmentAgencyStatus } from './FulfillmentAgencyStatus';
/**
 * Model FulfillmentAgency
 */
export type FulfillmentAgency = {
    updatedAt: string;
    createdAt: string;
    status: FulfillmentAgencyStatus;
    phone: string | null;
    name: string;
    id: number;
};
