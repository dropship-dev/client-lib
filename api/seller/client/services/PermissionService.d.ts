import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { AcceptStoreInviteDto } from '../models/AcceptStoreInviteDto';
import type { InviteStoreStaffDto } from '../models/InviteStoreStaffDto';
import type { PrismaJson_Permissions } from '../models/PrismaJson_Permissions';
import type { Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_ } from '../models/Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_';
import type { UpdateStoreStaffDto } from '../models/UpdateStoreStaffDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PermissionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListStoreUsers({ storeId, nextPageIndex, pageSize, keyword, }: {
        storeId: string;
        nextPageIndex?: string;
        pageSize?: number;
        keyword?: string;
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
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    searchSellerEmail({ storeId, email, }: {
        storeId: string;
        email: string;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStoreUserPermissionDetail({ storeId, userId, }: {
        storeId: string;
        userId: string;
    }): CancelablePromise<{
        permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
        phone: string;
        email: string;
        name: string;
        id: string;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    editStoreUser({ storeId, userId, requestBody, }: {
        storeId: string;
        userId: string;
        requestBody: UpdateStoreStaffDto;
    }): CancelablePromise<void>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteStoreUser({ storeId, userId, }: {
        storeId: string;
        userId: string;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    inviteStoreUser({ storeId, requestBody, }: {
        storeId: string;
        requestBody: InviteStoreStaffDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    acceptStoreInvite({ requestBody, }: {
        requestBody: AcceptStoreInviteDto;
    }): CancelablePromise<({
        storeId: string;
    } | 'Token is valid')>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCurrentStoreUserPermissionDetail({ storeId, }: {
        storeId: string;
    }): CancelablePromise<{
        permissions: PrismaJson_Permissions;
        role: _36_Enums_StoreRole;
    }>;
}
