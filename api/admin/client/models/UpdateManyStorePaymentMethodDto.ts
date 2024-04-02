/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentType } from './PaymentType';
export type UpdateManyStorePaymentMethodDto = {
  paymentId: number;
  oldPaymentId: number;
  type: PaymentType;
  storeIds: Array<string>;
};

