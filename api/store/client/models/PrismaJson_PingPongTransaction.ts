/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PingPongTransactionStatus } from './PingPongTransactionStatus';
import type { PingPongTransactionType } from './PingPongTransactionType';
import type { PrismaJson_PingPongMoney } from './PrismaJson_PingPongMoney';
import type { PrismaJson_PingPongServiceCharge } from './PrismaJson_PingPongServiceCharge';
export type PrismaJson_PingPongTransaction = {
  serviceCharge: PrismaJson_PingPongServiceCharge;
  targetMoney: PrismaJson_PingPongMoney;
  originMoney: PrismaJson_PingPongMoney;
  payMoney: PrismaJson_PingPongMoney;
  partnerOrderId: string;
  transactionType: PingPongTransactionType;
  transactionStatus: PingPongTransactionStatus;
  transactionId: string;
  clientId: string;
};

