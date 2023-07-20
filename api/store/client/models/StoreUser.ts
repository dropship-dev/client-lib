/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StoreRole } from './StoreRole';

/**
 * Model StoreUser
 */
export type StoreUser = {
  updatedAt: string;
  createdAt: string;
  role: StoreRole;
  userId: string;
  storeId: string;
  id: number;
};

