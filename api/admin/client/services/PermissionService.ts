/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_RolePermissionType } from '../models/_36_Enums_RolePermissionType';
import type { _36_Enums_UserRole } from '../models/_36_Enums_UserRole';
import type { CreateFulfillmentRoleDto } from '../models/CreateFulfillmentRoleDto';
import type { CreateStaffFulfillmentAgencyDto } from '../models/CreateStaffFulfillmentAgencyDto';
import type { EditFulfillmentStaffDto } from '../models/EditFulfillmentStaffDto';
import type { EditRoleFulfillmentDto } from '../models/EditRoleFulfillmentDto';
import type { GetPermissionsFulfillAgencyRes } from '../models/GetPermissionsFulfillAgencyRes';
import type { PrismaJson_FirebaseDeviceToken } from '../models/PrismaJson_FirebaseDeviceToken';
import type { PrismaJson_Permissions } from '../models/PrismaJson_Permissions';
import type { Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_ } from '../models/Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermissionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public createStaffFulfillmentAgency({
    fulfillmentAgencyId,
    requestBody,
  }: {
    fulfillmentAgencyId: number,
    requestBody: CreateStaffFulfillmentAgencyDto,
  }): CancelablePromise<{
    subscriptionId: string;
    firebaseDeviceToken: PrismaJson_FirebaseDeviceToken;
    isActive: boolean;
    firstLogin: boolean;
    maxStaffStores: number;
    maxOwnedStores: number;
    shortId: string;
    role: _36_Enums_UserRole;
    invitedById: string;
    country: string;
    avatar: string;
    phone: string;
    email: string;
    name: string;
    updatedAt: string;
    createdAt: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns any Ok
   * @throws ApiError
   */
  public getListFulfillmentUsers({
    fulfillmentAgencyId,
    nextPageIndex,
    pageSize = 20,
    isActive,
    rolesId,
    keyword,
  }: {
    fulfillmentAgencyId: number,
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
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
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
  public searchFulfillmentAgencyStaff({
    fulfillmentAgencyId,
    nextPageIndex,
    pageSize = 20,
    keyword,
    excludeListId,
  }: {
    fulfillmentAgencyId: number,
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
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/search',
      path: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
      },
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
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/is-user-email-found',
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
  public getFulfillmentAssignedByRoleId({
    roleId,
    fulfillmentAgencyId,
  }: {
    roleId: number,
    fulfillmentAgencyId: number,
  }): CancelablePromise<Array<{
    isActive: boolean;
    email: string;
    name: string;
    createdAt: string;
    id: string;
  }>> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/assigned/role/{roleId}',
      path: {
        'roleId': roleId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public getListRoleByUserId({
    userId,
    fulfillmentAgencyId,
  }: {
    userId: string,
    fulfillmentAgencyId: number,
  }): CancelablePromise<{
    rolesInfo: Array<{
      permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
      name: string;
      id: number;
    }>;
    permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
    haveAllPermission: boolean;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/{userId}',
      path: {
        'userId': userId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public editFulfillmentStaff({
    userId,
    fulfillmentAgencyId,
    requestBody,
  }: {
    userId: string,
    fulfillmentAgencyId: number,
    requestBody: EditFulfillmentStaffDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/{userId}',
      path: {
        'userId': userId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public updateUserStatus({
    userId,
    fulfillmentAgencyId,
    requestBody,
  }: {
    userId: string,
    fulfillmentAgencyId: number,
    requestBody: {
      isActive: boolean;
    },
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/user/fulfillment-agency/{fulfillmentAgencyId}/account/{userId}/status',
      path: {
        'userId': userId,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
   * @returns GetPermissionsFulfillAgencyRes Ok
   * @throws ApiError
   */
  public getAllPermissions(): CancelablePromise<GetPermissionsFulfillAgencyRes> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/permission/fulfillment-agency',
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
    fulfillmentAgencyId,
    nextPageIndex,
    pageSize = 20,
    keyword,
  }: {
    fulfillmentAgencyId: number,
    nextPageIndex?: number,
    pageSize?: number,
    keyword?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: number;
    prePageIndex: number;
    total: number;
    data: Array<{
      permissions: PrismaJson_Permissions;
      name: string;
      createdAt: string;
      fulfillmentAgencyId: number;
      id: number;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/permission/fulfillment-agency/role',
      query: {
        'nextPageIndex': nextPageIndex,
        'pageSize': pageSize,
        'keyword': keyword,
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
  public createRole({
    requestBody,
  }: {
    requestBody: CreateFulfillmentRoleDto,
  }): CancelablePromise<{
    typeRolePermission: _36_Enums_RolePermissionType;
    isSuperAdmin: boolean;
    permissions: PrismaJson_Permissions;
    isDefault: boolean;
    name: string;
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/permission/fulfillment-agency/role',
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteRole({
    roleId,
    fulfillmentAgencyId,
  }: {
    roleId: number,
    fulfillmentAgencyId: number,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/permission/fulfillment-agency/role/{roleId}',
      path: {
        'roleId': roleId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
    requestBody: EditRoleFulfillmentDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/permission/fulfillment-agency/role/{roleId}',
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
   * @returns any Ok
   * @throws ApiError
   */
  public getRoleById({
    roleId,
    fulfillmentAgencyId,
  }: {
    roleId: number,
    fulfillmentAgencyId: number,
  }): CancelablePromise<{
    canDeleteRole: boolean;
    permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
    name: string;
    id: number;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/permission/fulfillment-agency/role/{roleId}',
      path: {
        'roleId': roleId,
      },
      query: {
        'fulfillmentAgencyId': fulfillmentAgencyId,
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
