import type { PingPongFeePayer } from './PingPongFeePayer';
import type { PingPongMoney } from './PingPongMoney';
export type PingPongServiceCharge = {
    finalFee: PingPongMoney;
    feePayer: PingPongFeePayer;
};
