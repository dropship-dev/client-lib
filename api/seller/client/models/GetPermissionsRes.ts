/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Permission } from './Permission';
import type { SellerPermission } from './SellerPermission';
import type { SuperAdminPermission } from './SuperAdminPermission';
export type GetPermissionsRes = {
  sellerPermissions?: Array<SellerPermission>;
  superAdminPermissions: Array<SuperAdminPermission>;
  permissions: Array<Permission>;
};

