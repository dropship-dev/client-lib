/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_PaymentMethodType } from './_36_Enums_PaymentMethodType';
import type { _36_Enums_RequestPayoutStatus } from './_36_Enums_RequestPayoutStatus';
import type { PrismaJson_HistoryRequestPayout } from './PrismaJson_HistoryRequestPayout';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
export type DefaultSelection_Prisma__36_RequestPayoutPayload_ = {
  payoutInToDate: string;
  payoutInFromDate: string;
  decidedAt: string;
  historyRequestPayout: PrismaJson_HistoryRequestPayout;
  photos: PrismaJson_Photos;
  noteByAdmin: string;
  noteBySeller: string;
  convertCurrencyCode: string;
  pingPongAccountId: string;
  bankAccountId: string;
  paymentMethod: _36_Enums_PaymentMethodType;
  convertCurrencyAmount: number;
  requestCurrencyAmount: number;
  status: _36_Enums_RequestPayoutStatus;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: string;
};

