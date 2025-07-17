import type { PingPongFeePayer } from './PingPongFeePayer';
import type { PrismaJson_PingPongMoney } from './PrismaJson_PingPongMoney';
export type PrismaJson_PingPongServiceCharge = {
    feePayer: PingPongFeePayer;
    finalFee: PrismaJson_PingPongMoney;
};
