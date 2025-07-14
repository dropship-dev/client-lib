/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FulfillmentAgency } from './FulfillmentAgency';
import type { FulfillmentUser } from './FulfillmentUser';
import type { PaymentOnboarding } from './PaymentOnboarding';
import type { PrismaJson_Permissions } from './PrismaJson_Permissions';
import type { User } from './User';
import type { Wallet } from './Wallet';
export type ResponseGetUser = (User & {
  FulfillmentUser: Array<(FulfillmentUser & {
    FulfillmentAgency: (FulfillmentAgency & {
      PaymentOnboarding: Array<PaymentOnboarding>;
      Wallet: Array<Wallet>;
    });
  })>;
} & {
  UserRolePermission: Array<{
    RolePermission: {
      permissions: PrismaJson_Permissions;
      id: number;
    };
  }>;
  permissions: PrismaJson_Permissions;
  countryCode?: string;
  supportedAdvanced: boolean;
});

