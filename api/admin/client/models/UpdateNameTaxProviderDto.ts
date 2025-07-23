/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateNameTaxProviderDto = {
  /**
   * Store id (optional), but required when role is SELLER
   */
  storeId?: string;
  /**
   * Fulfillment agency id (optional), but required when role is ADMIN
   */
  fulfillmentAgencyId?: number;
  /**
   * Tax provider name
   */
  name: string;
};

