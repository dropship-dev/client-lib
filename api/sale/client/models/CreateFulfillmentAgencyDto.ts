/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentAgencyType } from './_36_Enums_FulfillmentAgencyType';
import type { IntegrationWithFulfillmentPlatformDto } from './IntegrationWithFulfillmentPlatformDto';
export type CreateFulfillmentAgencyDto = {
  name: string;
  email: string;
  phone?: string;
  type?: _36_Enums_FulfillmentAgencyType;
  integrateWithFulfillmentPlatform?: IntegrationWithFulfillmentPlatformDto;
};

