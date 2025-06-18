/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreRole } from './_36_Enums_StoreRole';
import type { PrismaJson_Permissions } from './PrismaJson_Permissions';
export type DefaultSelection_Prisma__36_StoreUserPayload_ = {
  userName: string;
  permissions: PrismaJson_Permissions;
  isOwner: boolean;
  role: _36_Enums_StoreRole;
  userId: string;
  updatedAt: string;
  createdAt: string;
  storeId: string;
  id: number;
};

