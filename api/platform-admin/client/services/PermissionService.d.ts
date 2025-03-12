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
export declare class PermissionService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListSuperAdmin({ nextPageIndex, pageSize, isActive, rolesId, keyword, }: {
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
    createSuperAdmin({ requestBody, }: {
        requestBody: CreateSuperAdminDto;
    }): CancelablePromise<{
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    searchSuperAdmin({ nextPageIndex, pageSize, keyword, excludeListId, }: {
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
    getSuperAdminsAssignedByRoleId({ roleId, }: {
        roleId: number;
    }): CancelablePromise<Array<{
        isActive: boolean;
        email: string;
        name: string;
        createdAt: string;
        id: string;
    }>>;
    /**
     * @returns void
     * @throws ApiError
     */
    editSuperAdmin({ userId, requestBody, }: {
        userId: string;
        requestBody: EditSuperAdminDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    changePassword({ requestBody, }: {
        requestBody: ChangePasswordDto;
    }): CancelablePromise<void>;
    /**
     * @returns CreateRoleRes Ok
     * @throws ApiError
     */
    createRole({ requestBody, }: {
        requestBody: CreateRoleDto;
    }): CancelablePromise<CreateRoleRes>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListRole({ nextPageIndex, pageSize, keyword, }: {
        nextPageIndex?: string;
        pageSize?: number;
        keyword?: string;
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
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    editRole({ roleId, requestBody, }: {
        roleId: number;
        requestBody: EditRoleDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    deleteRole({ roleId, }: {
        roleId: number;
    }): CancelablePromise<void>;
    /**
     * @returns GetPermissionsRes Ok
     * @throws ApiError
     */
    getAllPermissions(): CancelablePromise<GetPermissionsRes>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListRoleByUserId({ userId, }: {
        userId: string;
    }): CancelablePromise<{
        rolesInfo: Array<{
            permissions: Record_Permission_or_SuperAdminPermission_boolean_or_undefined_;
            name: string;
            id: number;
        }>;
        permissions: Record_Permission_or_SuperAdminPermission_boolean_or_undefined_;
        haveAllPermission: boolean;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    searchRoleByName({ nextPageIndex, pageSize, keyword, }: {
        nextPageIndex?: string;
        pageSize?: number;
        keyword?: string;
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
    }>;
}
