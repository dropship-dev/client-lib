import type { CurrencyCode } from './CurrencyCode';
import type { PingPongTransactionType } from './PingPongTransactionType';
import type { PrismaJson_PingPongMoney } from './PrismaJson_PingPongMoney';
import type { PrismaJson_PingPongServiceCharge } from './PrismaJson_PingPongServiceCharge';
export type PrismaJson_PingPongTrialCalculation = {
    preExpireTime: number;
    preTime: number;
    serviceCharge: PrismaJson_PingPongServiceCharge;
    type: PingPongTransactionType;
    exchangeList: Array<{
        exchangeRate: number;
        targetCurrency: CurrencyCode;
        originCurrency: CurrencyCode;
    }>;
    targetMoney: PrismaJson_PingPongMoney;
    originMoney: PrismaJson_PingPongMoney;
    payMoney: PrismaJson_PingPongMoney;
    balanceEnough: boolean;
    trailKey: string;
    clientId: string;
};
