/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { ChangePasswordDto } from '../models/ChangePasswordDto';
import type { CreateRoleDto } from '../models/CreateRoleDto';
import type { CreateRoleRes } from '../models/CreateRoleRes';
import type { CreateSuperAdminDto } from '../models/CreateSuperAdminDto';
import type { EditRoleDto } from '../models/EditRoleDto';
import type { EditSuperAdminDto } from '../models/EditSuperAdminDto';
import type { GetPermissionsRes } from '../models/GetPermissionsRes';
import type { Record_Permission_or_SuperAdminPermission_boolean_or_undefined_ } from '../models/Record_Permission_or_SuperAdminPermission_boolean_or_undefined_';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermissionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getListSuperAdmin({
    nextPageIndex,
    pageSize = 20,
    isActive,
    rolesId,
    keyword,
  }: {
    nextPageIndex?: string,
    pageSize?: number,
    isActive?: boolean,
    rolesId?: Array<number>,
    keyword?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      phone: string;
      createdAt: string;
      roles: Array<{
        id: number;
        name: string;
      }>;
      name: string;
      isActive: boolean;
      role: _36_Enums_UserRole;
      email: string;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/super-admin/account',
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'isActive': isActive,
        'rolesId': rolesId,
        'keyword': keyword,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createSuperAdmin({
    requestBody,
  }: {
    requestBody: CreateSuperAdminDto,
  }): CancelablePromise<{
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user/super-admin/account',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public searchSuperAdmin({
    nextPageIndex,
    pageSize = 20,
    keyword,
    excludeListId,
  }: {
    nextPageIndex?: string,
    pageSize?: number,
    keyword?: string,
    excludeListId?: Array<string>,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      isActive: boolean;
      email: string;
      name: string;
      createdAt: string;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/super-admin/account/search',
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'keyword': keyword,
        'excludeListId': excludeListId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public isUserEmailFound({
    email,
  }: {
    email: string,
  }): CancelablePromise<{
    isFound: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/super-admin/account/is-user-email-found',
      query: {
        'email': email,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getSuperAdminsAssignedByRoleId({
    roleId,
  }: {
    roleId: number,
  }): CancelablePromise<Array<{
    isActive: boolean;
    email: string;
    name: string;
    createdAt: string;
    id: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/super-admin/account/assigned/role/{roleId}',
      path: {
        'roleId': roleId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public editSuperAdmin({
    userId,
    requestBody,
  }: {
    userId: string,
    requestBody: EditSuperAdminDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/user/super-admin/account/{userId}',
      path: {
        'userId': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public changePassword({
    requestBody,
  }: {
    requestBody: ChangePasswordDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user/super-admin/account/change-password',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public updateUserStatus({
    userId,
    requestBody,
  }: {
    userId: string,
    requestBody: {
      isActive: boolean;
    },
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/user/super-admin/account/{userId}/status',
      path: {
        'userId': userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns CreateRoleRes Ok
   * @throws ApiError
   */
  public createRole({
    requestBody,
  }: {
    requestBody: CreateRoleDto,
  }): CancelablePromise<CreateRoleRes> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/super-admin/permission/role',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getListRole({
    nextPageIndex,
    pageSize = 20,
    keyword,
  }: {
    nextPageIndex?: string,
    pageSize?: number,
    keyword?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      updatedAt: string;
      createdAt: string;
      permissions: Record_Permission_or_SuperAdminPermission_boolean_or_undefined_;
      name: string;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/super-admin/permission/role',
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'keyword': keyword,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public editRole({
    roleId,
    requestBody,
  }: {
    roleId: number,
    requestBody: EditRoleDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/super-admin/permission/role/{roleId}',
      path: {
        'roleId': roleId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns void
   * @throws ApiError
   */
  public deleteRole({
    roleId,
  }: {
    roleId: number,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/super-admin/permission/role/{roleId}',
      path: {
        'roleId': roleId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getRoleById({
    roleId,
  }: {
    roleId: number,
  }): CancelablePromise<{
    canDeleteRole: boolean;
    permissions: Record_Permission_or_SuperAdminPermission_boolean_or_undefined_;
    name: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/super-admin/permission/role/{roleId}',
      path: {
        'roleId': roleId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns GetPermissionsRes Ok
   * @throws ApiError
   */
  public getAllPermissions(): CancelablePromise<GetPermissionsRes> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/super-admin/permission',
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getListRoleByUserId({
    userId,
  }: {
    userId: string,
  }): CancelablePromise<{
    rolesInfo: Array<{
      permissions: Record_Permission_or_SuperAdminPermission_boolean_or_undefined_;
      name: string;
      id: number;
    }>;
    permissions: Record_Permission_or_SuperAdminPermission_boolean_or_undefined_;
    haveAllPermission: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/super-admin/permission/role/user/{userId}',
      path: {
        'userId': userId,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public searchRoleByName({
    nextPageIndex,
    pageSize = 20,
    keyword,
  }: {
    nextPageIndex?: string,
    pageSize?: number,
    keyword?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      name: string;
      createdAt: string;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/super-admin/permission/role/search',
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'keyword': keyword,
      },
      errors: {
        400: `Bad request`,
        401: `Invalid token`,
        403: `Forbidden`,
        404: `Not found`,
        500: `Internal server error`,
      },
    });
  }
}
