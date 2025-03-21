/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FraudDetection } from './FraudDetection';
import type { FraudStatusType } from './FraudStatusType';
import type { FulfillmentAgency } from './FulfillmentAgency';
import type { Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_or_PaymentIntegrationType_or_isConnectPSSFF_or_PaymentOnboarding_ } from './Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_or_PaymentIntegrationType_or_isConnectPSSFF_or_PaymentOnboarding_';
import type { Store } from './Store';
import type { StoreUser } from './StoreUser';
import type { Wallet } from './Wallet';
export type StoreData = (Store & {
  Payment: Array<Omit_Payment_secretKey_or_token_or_tokenExpiredAt_or_deleted_or_userId_or_isPlatform_or_gatewayUrl_or_partnerId_or_salt_or_PaymentIntegrationType_or_isConnectPSSFF_or_PaymentOnboarding_>;
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

