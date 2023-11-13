/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { COST_CALCULATION_METHOD } from './COST_CALCULATION_METHOD';
import type { FulfillmentAgencyStatus } from './FulfillmentAgencyStatus';

/**
 * Model FulfillmentAgency
 */
export type FulfillmentAgency = {
  updatedAt: string;
  createdAt: string;
  costCalculationMethod: COST_CALCULATION_METHOD | null;
  executionTime: string;
  status: FulfillmentAgencyStatus;
  phone: string | null;
  email: string;
  name: string;
  id: number;
};

