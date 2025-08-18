/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListCountryCode } from './ListCountryCode';
export type UpdateConfigTaxProviderDto = {
  /**
   * Store id (optional), but required when role is SELLER
   */
  storeId?: string;
  /**
   * Fulfillment agency id (optional), but required when role is ADMIN
   */
  fulfillmentAgencyId?: number;
  /**
   * List country code
   */
  listCountryCode: ListCountryCode;
  /**
   * List payment gateway id
   */
  listPaymentGateway: Array<number>;
};

