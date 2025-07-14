/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_SubscriptionInterval } from './_36_Enums_SubscriptionInterval';
export type PayPlatformTransactionFeeDto = {
  platformFee: number;
  subscriptionPlan?: {
    interval: _36_Enums_SubscriptionInterval;
    id: number;
  };
  paymentMethodId: string;
};

