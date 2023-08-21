/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentType } from './PaymentType';

/**
 * Model Payment
 */
export type Payment = {
  updatedAt: string;
  createdAt: string;
  secretKey: string;
  publishableKey: string;
  name: string;
  email: string;
  type: PaymentType;
  userId: string;
  id: number;
};

