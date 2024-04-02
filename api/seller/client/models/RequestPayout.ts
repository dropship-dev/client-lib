/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentMethodType } from './PaymentMethodType';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { RequestPayoutStatus } from './RequestPayoutStatus';
/**
 * Model RequestPayout
 */
export type RequestPayout = {
  updatedAt: string;
  createdAt: string;
  storeId: string | null;
  /**
   * [Photos]
   */
  photos: PrismaJson_Photos | null;
  noteByAdmin: string | null;
  noteBySeller: string | null;
  convertCurrencyCode: string;
  pingPongAccountId: string | null;
  bankAccountId: string | null;
  status: RequestPayoutStatus;
  paymentMethod: PaymentMethodType;
  convertCurrencyAmount: number;
  requestCurrencyAmount: number;
  id: string;
};

