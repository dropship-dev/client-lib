/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CostCalculationMethod } from './CostCalculationMethod';
import type { FulfillmentAgencyStatus } from './FulfillmentAgencyStatus';
import type { PrismaJson_Timezone } from './PrismaJson_Timezone';

/**
 * Model FulfillmentAgency
 */
export type FulfillmentAgency = {
  updatedAt: string;
  createdAt: string;
  /**
   * [Timezone]
   */
  timezone: PrismaJson_Timezone | null;
  costCalculationMethod: CostCalculationMethod | null;
  executionTime: string;
  status: FulfillmentAgencyStatus;
  phone: string | null;
  email: string;
  name: string;
  id: number;
};

