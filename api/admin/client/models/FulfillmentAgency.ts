/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentAgencyStatus } from './FulfillmentAgencyStatus';

/**
 * Model FulfillmentAgency
 */
export type FulfillmentAgency = {
  updatedAt: string;
  createdAt: string;
  executionTime: string;
  status: FulfillmentAgencyStatus;
  phone: string | null;
  email: string;
  name: string;
  id: number;
};
