/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentType } from './PaymentType';

export type CreatePaymentDto = {
  type: PaymentType;
  email: string;
  publishableKey: string;
  secretKey: string;
};

