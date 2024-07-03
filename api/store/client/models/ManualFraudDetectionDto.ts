/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActiveDetection } from './ActiveDetection';

export type ManualFraudDetectionDto = {
  isFraud: boolean | null;
  orderId?: string;
  storeId?: string;
  action: ActiveDetection;
};

