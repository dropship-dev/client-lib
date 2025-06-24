/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { AcceptStoreInviteDto } from '../models/AcceptStoreInviteDto';
import type { InviteStoreStaffDto } from '../models/InviteStoreStaffDto';
import type { PrismaJson_Permissions } from '../models/PrismaJson_Permissions';
import type { Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_ } from '../models/Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_';
import type { UpdateStoreStaffDto } from '../models/UpdateStoreStaffDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermissionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * @returns any Ok
   * @throws ApiError
   */
  public getListStoreUsers({
    storeId,
    nextPageIndex,
    pageSize = 20,
    keyword,
  }: {
    storeId: string,
    nextPageIndex?: string,
    pageSize?: number,
    keyword?: string,
  }): CancelablePromise<{
    orderBy: string;
    nextPageIndex: string;
    prePageIndex: string;
    total: number;
    data: Array<{
      permissions: number;
      phone: string;
      createdAt: string;
      name: string;
      email: string;
      id: string;
    }>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/store/{storeId}/account',
      path: {
        'storeId': storeId,
      },
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
   * @returns string Ok
   * @throws ApiError
   */
  public searchSellerEmail({
    storeId,
    email,
  }: {
    storeId: string,
    email: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/store/{storeId}/account/search/email',
      path: {
        'storeId': storeId,
      },
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
  public getStoreUserPermissionDetail({
    storeId,
    userId,
  }: {
    storeId: string,
    userId: string,
  }): CancelablePromise<{
    permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
    phone: string;
    email: string;
    name: string;
    id: string;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/user/store/{storeId}/account/{userId}',
      path: {
        'storeId': storeId,
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
   * @returns void
   * @throws ApiError
   */
  public editStoreUser({
    storeId,
    userId,
    requestBody,
  }: {
    storeId: string,
    userId: string,
    requestBody: UpdateStoreStaffDto,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'PATCH',
      url: '/user/store/{storeId}/account/{userId}',
      path: {
        'storeId': storeId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public deleteStoreUser({
    storeId,
    userId,
  }: {
    storeId: string,
    userId: string,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/user/store/{storeId}/account/{userId}',
      path: {
        'storeId': storeId,
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
   * @returns string Ok
   * @throws ApiError
   */
  public inviteStoreUser({
    storeId,
    requestBody,
  }: {
    storeId: string,
    requestBody: InviteStoreStaffDto,
  }): CancelablePromise<string> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user/store/{storeId}/account/invite',
      path: {
        'storeId': storeId,
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
  public acceptStoreInvite({
    requestBody,
  }: {
    requestBody: AcceptStoreInviteDto,
  }): CancelablePromise<({
    storeId: string;
  } | 'Token is valid')> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/user/store/account/accept-invite',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        400: `Bad request`,
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
  public getCurrentStoreUserPermissionDetail({
    storeId,
  }: {
    storeId: string,
  }): CancelablePromise<{
    permissions: PrismaJson_Permissions;
    role: _36_Enums_StoreRole;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/seller/permission/{storeId}',
      path: {
        'storeId': storeId,
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
