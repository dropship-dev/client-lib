/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RefundType } from './RefundType';
export type RefundOrderDto = {
  infoOrderRefund?: Array<{
    quantity: number;
    idOrderItem: string;
  }>;
  note: string;
  amount: number;
  typeRefund: RefundType;
};

