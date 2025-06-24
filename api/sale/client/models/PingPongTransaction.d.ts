import type { PingPongMoney } from './PingPongMoney';
import type { PingPongServiceCharge } from './PingPongServiceCharge';
import type { PingPongTransactionStatus } from './PingPongTransactionStatus';
import type { PingPongTransactionType } from './PingPongTransactionType';
export type PingPongTransaction = {
    clientId: string;
    transactionId: string;
    transactionStatus: PingPongTransactionStatus;
    transactionType: PingPongTransactionType;
    partnerOrderId: string;
    payMoney: PingPongMoney;
    originMoney: PingPongMoney;
    targetMoney: PingPongMoney;
    serviceCharge: PingPongServiceCharge;
};
