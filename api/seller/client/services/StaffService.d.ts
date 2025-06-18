import type { _36_Enums_StoreRole } from '../models/_36_Enums_StoreRole';
import type { CreateStaffDto } from '../models/CreateStaffDto';
import type { PrismaJson_Permissions } from '../models/PrismaJson_Permissions';
import type { UpdateStaffDto } from '../models/UpdateStaffDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StaffService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createStaff({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateStaffDto;
    }): CancelablePromise<{
        userName: string;
        permissions: PrismaJson_Permissions;
        isOwner: boolean;
        role: _36_Enums_StoreRole;
        userId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStaff({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<({
        User: {
            avatar: string;
            email: string;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: string;
        };
    } & {
        userName: string;
        permissions: PrismaJson_Permissions;
        isOwner: boolean;
        role: _36_Enums_StoreRole;
        userId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    })>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateStaff({ storeId, userId, requestBody, }: {
        storeId: string;
        userId: string;
        requestBody: UpdateStaffDto;
    }): CancelablePromise<{
        userName: string;
        permissions: PrismaJson_Permissions;
        isOwner: boolean;
        role: _36_Enums_StoreRole;
        userId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteStaff({ storeId, userId, }: {
        storeId: string;
        userId: string;
    }): CancelablePromise<{
        userName: string;
        permissions: PrismaJson_Permissions;
        isOwner: boolean;
        role: _36_Enums_StoreRole;
        userId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
}
