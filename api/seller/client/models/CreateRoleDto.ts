/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Permission } from './Permission';
export type CreateRoleDto = {
  name: string;
  permissions: Array<Permission>;
  assignedUsersId?: Array<string>;
};

