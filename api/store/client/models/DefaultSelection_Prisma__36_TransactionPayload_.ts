/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_TransactionStatus } from './_36_Enums_TransactionStatus';
import type { _36_Enums_TransactionType } from './_36_Enums_TransactionType';
import type { PrismaJson_Photos } from './PrismaJson_Photos';
import type { PrismaJson_TransactionDetails } from './PrismaJson_TransactionDetails';
import type { PrismaJson_TransactionPaymentMethod } from './PrismaJson_TransactionPaymentMethod';
export type DefaultSelection_Prisma__36_TransactionPayload_ = {
  requestPayoutId: string;
  isRollback: boolean;
  refundIdGateway: string;
  transactionDetails: PrismaJson_TransactionDetails;
  notes: string;
  disputeFee: number;
  lastBalance: number;
  fee: number;
  amount: number;
  idTransaction: string;
  orderId: string;
  photos: PrismaJson_Photos;
  paymentMethod: PrismaJson_TransactionPaymentMethod;
  walletId: string;
  type: _36_Enums_TransactionType;
  status: _36_Enums_TransactionStatus;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: number;
};

