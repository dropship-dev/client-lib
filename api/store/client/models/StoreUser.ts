/* generated using openapi-typescript-codegen -- do not edit */
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
  isOwner: boolean | null;
  role: StoreRole;
  userId: string;
  storeId: string;
  id: number;
};

