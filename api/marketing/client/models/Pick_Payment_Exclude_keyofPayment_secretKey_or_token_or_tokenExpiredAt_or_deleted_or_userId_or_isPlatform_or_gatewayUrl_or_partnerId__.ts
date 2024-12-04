/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_EnvironmentType } from './_36_Enums_EnvironmentType';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
/**
 * From T, pick a set of properties whose keys are in the union K
 */
export type Pick_Payment_Exclude_keyofPayment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId__ = {
  id: number;
  fulfillmentAgencyId: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  type: _36_Enums_PaymentType;
  companyName: string;
  companyPhone: string;
  companyAddress: string;
  isShowCompanyAddress: boolean;
  publishableKey: string;
  merchantId: string;
  UIVersion: number;
  environment: _36_Enums_EnvironmentType;
};

