import type { FulfillmentAgencyStatus } from './FulfillmentAgencyStatus';
/**
 * Model FulfillmentAgency
 */
export type FulfillmentAgency = {
    updatedAt: string;
    createdAt: string;
    executionTime: string;
    status: FulfillmentAgencyStatus;
    phone: string | null;
    email: string | null;
    name: string;
    id: number;
};
