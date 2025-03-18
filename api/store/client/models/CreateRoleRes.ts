/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Permission } from './Permission';
import type { SuperAdminPermission } from './SuperAdminPermission';
export type CreateRoleRes = {
  updatedAt: string;
  createdAt: string;
  permissions: Array<(Permission | SuperAdminPermission)>;
  name: string;
  id: number;
};

