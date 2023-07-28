/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomDomainStatus } from './CustomDomainStatus';

/**
 * Model CustomDomain
 */
export type CustomDomain = {
  updatedAt: string;
  createdAt: string;
  storeId: string;
  status: CustomDomainStatus;
  domain: string;
  id: number;
};

