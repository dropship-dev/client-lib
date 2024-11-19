import type { FulfillmentAgencyType } from './FulfillmentAgencyType';
export type CreateFulfillmentAgencyDto = {
    name: string;
    email: string;
    phone?: string;
    type?: FulfillmentAgencyType;
};
