/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FraudDetectionStatusType } from './FraudDetectionStatusType';
import type { FraudDetectionType } from './FraudDetectionType';
import type { PrismaJson_TypeOfFraudService } from './PrismaJson_TypeOfFraudService';

/**
 * Model FraudDetection
 */
export type FraudDetection = {
  updatedAt: string;
  createdAt: string;
  storeId: string | null;
  isDeleted: boolean;
  /**
   * [TypeOfFraudService]
   */
  labels: PrismaJson_TypeOfFraudService | null;
  idempotencyKey: string | null;
  humanFraudDetect: FraudDetectionStatusType;
  systemFraudDetect: FraudDetectionStatusType;
  orderId: string | null;
  type: FraudDetectionType;
  id: string;
};

