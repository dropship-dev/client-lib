/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListCountryCode } from './ListCountryCode';
export type ConnectQuadernoDto = {
  /**
   * Store id (optional), but required when role is SELLER
   */
  storeId?: string;
  /**
   * Fulfillment agency id (optional), but required when role is ADMIN
   */
  fulfillmentAgencyId?: number;
  /**
   * Quaderno url
   */
  url: string;
  /**
   * Quaderno secret key
   */
  secretKey: string;
  /**
   * Quaderno public key
   */
  publicKey: string;
  /**
   * Tax provider name
   */
  name: string;
  /**
   * List country code
   */
  listCountryCode: ListCountryCode;
  /**
   * List payment gateway id
   */
  listPaymentGateway: Array<number>;
};

