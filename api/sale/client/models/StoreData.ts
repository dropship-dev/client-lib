/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FraudDetection } from './FraudDetection';
import type { FraudStatusType } from './FraudStatusType';
import type { FulfillmentAgency } from './FulfillmentAgency';
import type { PaymentTypeCustom } from './PaymentTypeCustom';
import type { Store } from './Store';
import type { StoreUser } from './StoreUser';
import type { Wallet } from './Wallet';
export type StoreData = (Store & {
  Payment: Array<PaymentTypeCustom>;
  fraudStatus?: FraudStatusType;
  Wallet: Array<Wallet>;
  FraudDetection: Array<FraudDetection>;
  StoreUser: Array<StoreUser>;
  FulfillmentAgency: (FulfillmentAgency & {
    Setting: {
      serviceFee: number | null;
      percentageCostPlatformFee: number | null;
      othersFee: number | null;
    } | null;
  }) | null;
});

