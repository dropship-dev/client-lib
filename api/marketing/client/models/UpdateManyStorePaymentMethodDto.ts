/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
export type UpdateManyStorePaymentMethodDto = {
  paymentId: number;
  oldPaymentId: number;
  type: _36_Enums_PaymentType;
  storeIds: Array<string>;
};

