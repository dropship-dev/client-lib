import type { PingPongAuthorizedLogin } from './PingPongAuthorizedLogin';
import type { PingPongEventType } from './PingPongEventType';
import type { PingPongTransaction } from './PingPongTransaction';
export type PingPongEvent = {
    type: PingPongEventType;
    data: (PingPongAuthorizedLogin | PingPongTransaction);
};
