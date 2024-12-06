/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentAgency } from './FulfillmentAgency';
import type { FulfillmentUser } from './FulfillmentUser';
import type { PaymentOnboarding } from './PaymentOnboarding';
import type { User } from './User';
import type { Wallet } from './Wallet';
export type ResponseGetUser = (User & {
  FulfillmentUser: Array<(FulfillmentUser & {
    FulfillmentAgency: (FulfillmentAgency & {
      PaymentOnboarding: Array<PaymentOnboarding>;
      Wallet: Array<Wallet>;
    });
  })>;
});

