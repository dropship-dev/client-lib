/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PingPongAuthorizedLogin } from './PingPongAuthorizedLogin';
import type { PingPongEventType } from './PingPongEventType';
import type { PingPongTransaction } from './PingPongTransaction';
export type PingPongEvent = {
  type: PingPongEventType;
  data: (PingPongAuthorizedLogin | PingPongTransaction);
};

