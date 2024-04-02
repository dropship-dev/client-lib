/* generated using openapi-typescript-codegen -- do not edit */
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
  fulfillmentAgencyId: number | null;
  UIVersion: number;
  deleted: boolean;
  gatewayUrl: string | null;
  tokenExpiredAt: string | null;
  token: string | null;
  secretKey: string;
  publishableKey: string;
  isShowCompanyAddress: boolean | null;
  companyAddress: string | null;
  companyName: string | null;
  name: string;
  email: string | null;
  type: PaymentType;
  userId: string;
  id: number;
};

