/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PingPongTransactionType } from './PingPongTransactionType';
import type { PrismaJson_PingPongMoney } from './PrismaJson_PingPongMoney';
import type { PrismaJson_PingPongServiceCharge } from './PrismaJson_PingPongServiceCharge';
export type PrismaJson_PingPongTrialCalculation = {
  trailExpireTime: number;
  trailTime: number;
  serviceCharge: PrismaJson_PingPongServiceCharge;
  type: PingPongTransactionType;
  exchangeList: Array<{
    exchangeRate: number;
    targetCurrency: string;
    originCurrency: string;
  }>;
  targetMoney: PrismaJson_PingPongMoney;
  originMoney: PrismaJson_PingPongMoney;
  payMoney: PrismaJson_PingPongMoney;
  balanceEnough: boolean;
  trailKey: string;
  clientId: string;
};

