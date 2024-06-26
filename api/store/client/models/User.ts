/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserRole } from './UserRole';

/**
 * Model User
 */
export type User = {
  subscriptionId: string | null;
  updatedAt: string;
  createdAt: string;
  firstLogin: boolean;
  maxStaffStores: number;
  maxOwnedStores: number;
  shortId: string;
  role: UserRole;
  avatar: string | null;
  phone: string | null;
  country: string | null;
  name: string;
  email: string;
  id: string;
};

