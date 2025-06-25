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
export declare class PermissionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStaffFulfillmentAgency({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: CreateStaffFulfillmentAgencyDto;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListFulfillmentUsers({ fulfillmentAgencyId, nextPageIndex, pageSize, isActive, rolesId, keyword, }: {
        fulfillmentAgencyId: number;
        nextPageIndex?: string;
        pageSize?: number;
        isActive?: boolean;
        rolesId?: Array<number>;
        keyword?: string;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    searchFulfillmentAgencyStaff({ fulfillmentAgencyId, nextPageIndex, pageSize, keyword, excludeListId, }: {
        fulfillmentAgencyId: number;
        nextPageIndex?: string;
        pageSize?: number;
        keyword?: string;
        excludeListId?: Array<string>;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    isUserEmailFound({ email, }: {
        email: string;
    }): CancelablePromise<{
        isFound: boolean;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getFulfillmentAssignedByRoleId({ roleId, fulfillmentAgencyId, }: {
        roleId: number;
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<{
        isActive: boolean;
        email: string;
        name: string;
        createdAt: string;
        id: string;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListRoleByUserId({ userId, fulfillmentAgencyId, }: {
        userId: string;
        fulfillmentAgencyId: number;
    }): CancelablePromise<{
        rolesInfo: Array<{
            permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
            name: string;
            id: number;
        }>;
        permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
        haveAllPermission: boolean;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    editFulfillmentStaff({ userId, fulfillmentAgencyId, requestBody, }: {
        userId: string;
        fulfillmentAgencyId: number;
        requestBody: EditFulfillmentStaffDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateUserStatus({ userId, fulfillmentAgencyId, requestBody, }: {
        userId: string;
        fulfillmentAgencyId: number;
        requestBody: {
            isActive: boolean;
        };
    }): CancelablePromise<void>;
    /**
     * @returns GetPermissionsFulfillAgencyRes Ok
     * @throws ApiError
     */
    getAllPermissions(): CancelablePromise<GetPermissionsFulfillAgencyRes>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListRole({ fulfillmentAgencyId, nextPageIndex, pageSize, keyword, }: {
        fulfillmentAgencyId: number;
        nextPageIndex?: number;
        pageSize?: number;
        keyword?: string;
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
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createRole({ requestBody, }: {
        requestBody: CreateFulfillmentRoleDto;
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
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteRole({ roleId, fulfillmentAgencyId, }: {
        roleId: number;
        fulfillmentAgencyId: number;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    editRole({ roleId, requestBody, }: {
        roleId: number;
        requestBody: EditRoleFulfillmentDto;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRoleById({ roleId, fulfillmentAgencyId, }: {
        roleId: number;
        fulfillmentAgencyId: number;
    }): CancelablePromise<{
        canDeleteRole: boolean;
        permissions: Record_Permission_or_SuperAdminPermission_or_SellerPermission_or_FulfillmentPermissions_boolean_or_undefined_;
        name: string;
        id: number;
    }>;
}
