/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_CountryInformations } from './PrismaJson_CountryInformations';

/**
 * Model RegionalShippingFee
 */
export type RegionalShippingFee = {
  updatedAt: string;
  createdAt: string;
  storeId: string | null;
  shippingFeeAdditional: number;
  shippingFee: number;
  /**
   * [CountryInformations]
   */
  countries: PrismaJson_CountryInformations;
  zoneName: string;
  id: string;
};

