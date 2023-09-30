import type { FulfillmentAgencyRole } from './FulfillmentAgencyRole';
/**
 * Model FulfillmentUser
 */
export type FulfillmentUser = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    isOwner: boolean | null;
    role: FulfillmentAgencyRole;
    userId: string;
    id: number;
};
