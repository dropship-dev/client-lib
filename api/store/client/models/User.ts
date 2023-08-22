/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserRole } from './UserRole';

/**
 * Model User
 */
export type User = {
  updatedAt: string;
  createdAt: string;
  maxStaffStores: number;
  maxOwnedStores: number;
  shortId: string;
  role: UserRole;
  avatar: string | null;
  name: string;
  email: string;
  id: string;
};

