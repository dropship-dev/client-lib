/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FraudDetectionStatusType } from './_36_Enums_FraudDetectionStatusType';
import type { ActiveDetection } from './ActiveDetection';
export type ManualFraudDetectionDto = {
  fraudDetectionStatus: _36_Enums_FraudDetectionStatusType;
  orderId?: string;
  storeId: string;
  action: ActiveDetection;
};

