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
  fulfillmentAgencyId: number;
  UIVersion: number;
  gatewayUrl: string | null;
  tokenExpiredAt: string | null;
  token: string | null;
  secretKey: string;
  publishableKey: string;
  name: string;
  email: string | null;
  type: PaymentType;
  userId: string;
  id: number;
};

