/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RefundType } from './RefundType';
import type { TypeOrderRefund } from './TypeOrderRefund';

export type RefundOrderDto = {
  infoOrderRefund?: Array<{
    quantity: number;
    id: number;
    type: TypeOrderRefund;
  }>;
  notes: string;
  amount: number;
  typeRefund: RefundType;
};

