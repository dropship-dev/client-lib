/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_CustomDomainStatus } from './_36_Enums_CustomDomainStatus';
import type { _36_Enums_DomainOrigin } from './_36_Enums_DomainOrigin';
import type { PrismaJson_DomainContactInfo } from './PrismaJson_DomainContactInfo';
export type DefaultSelection_Prisma__36_CustomDomainPayload_ = {
  isPrimary: boolean;
  contactInfo: PrismaJson_DomainContactInfo;
  renewable: boolean;
  renewalPrice: number;
  purchasePrice: number;
  domainOrigin: _36_Enums_DomainOrigin;
  autoRenew: boolean;
  expirationDate: string;
  target: string;
  domain: string;
  status: _36_Enums_CustomDomainStatus;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: number;
};

