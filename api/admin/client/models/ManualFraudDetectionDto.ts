/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActiveDetection } from './ActiveDetection';
import type { FraudDetectionStatusType } from './FraudDetectionStatusType';

export type ManualFraudDetectionDto = {
  fraudDetectionStatus: FraudDetectionStatusType;
  orderId?: string;
  storeId: string;
  action: ActiveDetection;
};

