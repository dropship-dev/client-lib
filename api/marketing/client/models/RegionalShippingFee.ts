/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_CountryInformation } from './PrismaJson_CountryInformation';

/**
 * Model RegionalShippingFee
 */
export type RegionalShippingFee = {
  deleted: boolean;
  updatedAt: string;
  createdAt: string;
  storeId: string | null;
  shippingFeeAdditional: number;
  shippingFee: number;
  /**
   * [CountryInformation]
   */
  countries: PrismaJson_CountryInformation;
  zoneName: string;
  id: string;
};

