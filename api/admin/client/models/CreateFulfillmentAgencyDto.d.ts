import type { _36_Enums_FulfillmentAgencyType } from './_36_Enums_FulfillmentAgencyType';
export type CreateFulfillmentAgencyDto = {
    name: string;
    email: string;
    phone?: string;
    type?: _36_Enums_FulfillmentAgencyType;
};
