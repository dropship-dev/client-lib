/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PrismaJson_HoldSetting } from './PrismaJson_HoldSetting';

/**
 * Model Setting
 */
export type Setting = {
  updatedAt: string;
  createdAt: string;
  fulfillmentAgencyId: number;
  percentageCostPlatformFee: number | null;
  /**
   * [HoldSetting]
   */
  hold: PrismaJson_HoldSetting | null;
  shippingPolicy: string;
  termsOfService: string;
  refundPolicy: string;
  privacyPolicy: string;
  id: number;
};

