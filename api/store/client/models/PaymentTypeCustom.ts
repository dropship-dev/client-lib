/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_EnvironmentType } from './_36_Enums_EnvironmentType';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
export type PaymentTypeCustom = {
  id: number;
  fulfillmentAgencyId: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  email: string;
  type: _36_Enums_PaymentType;
  merchantId: string;
  companyName: string;
  companyPhone: string;
  companyAddress: string;
  isShowCompanyAddress: boolean;
  publishableKey: string;
  BNcode: string;
  UIVersion: number;
  environment: _36_Enums_EnvironmentType;
};

