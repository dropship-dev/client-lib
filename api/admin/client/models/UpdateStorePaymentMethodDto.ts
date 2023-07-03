/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentType } from './PaymentType';

export type UpdateStorePaymentMethodDto = {
  paymentId: number;
  type: PaymentType;
};

