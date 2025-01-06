/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentAgencyType } from './_36_Enums_FulfillmentAgencyType';
import type { _36_Enums_FulfillmentPlatform } from './_36_Enums_FulfillmentPlatform';
export type CreateFulfillmentAgencyDto = {
  name: string;
  email: string;
  phone?: string;
  type?: _36_Enums_FulfillmentAgencyType;
  integrateWithFulfillmentPlatform?: _36_Enums_FulfillmentPlatform | null;
};

