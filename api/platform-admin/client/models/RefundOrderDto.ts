/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RefundType } from './RefundType';

export type RefundOrderDto = {
  infoOrderRefund?: Array<{
    quantity: number;
    idOrderItem: string;
  }>;
  notes: string;
  amount: number;
  typeRefund: RefundType;
};

