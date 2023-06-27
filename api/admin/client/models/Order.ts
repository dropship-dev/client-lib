/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Payer } from './Payer';
import type { PurchaseUnit } from './PurchaseUnit';

export type Order = {
  status?: Order.status;
  payer?: Payer;
  intent?: Order.intent;
  links?: Array<{
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'PATCH';
    rel: string;
    href: string;
  }>;
  purchase_units?: Array<PurchaseUnit>;
  processing_instruction?: Order.processing_instruction;
  id?: string;
  update_time?: string;
  create_time?: string;
};

export namespace Order {

  export enum status {
    CREATED = 'CREATED',
    SAVED = 'SAVED',
    APPROVED = 'APPROVED',
    VOIDED = 'VOIDED',
    COMPLETED = 'COMPLETED',
    PAYER_ACTION_REQUIRED = 'PAYER_ACTION_REQUIRED',
  }

  export enum intent {
    CAPTURE = 'CAPTURE',
    AUTHORIZE = 'AUTHORIZE',
  }

  export enum processing_instruction {
    ORDER_COMPLETE_ON_PAYMENT_APPROVAL = 'ORDER_COMPLETE_ON_PAYMENT_APPROVAL',
    NO_INSTRUCTION = 'NO_INSTRUCTION',
  }


}

