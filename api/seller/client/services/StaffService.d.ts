import type { CreateStaffDto } from '../models/CreateStaffDto';
import type { StoreUser } from '../models/StoreUser';
import type { UpdateStaffDto } from '../models/UpdateStaffDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class StaffService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns StoreUser Ok
     * @throws ApiError
     */
    createStaff({ storeId, requestBody, }: {
        storeId: number;
        requestBody: CreateStaffDto;
    }): CancelablePromise<StoreUser>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStaff({ storeId, }: {
        storeId: number;
    }): CancelablePromise<Array<(StoreUser & {
        User: {
            avatar: string;
            email: string;
            updatedAt: string;
            createdAt: string;
            name: string;
            id: string;
        };
    })>>;
    /**
     * @returns StoreUser Ok
     * @throws ApiError
     */
    updateStaff({ storeId, userId, requestBody, }: {
        storeId: number;
        userId: string;
        requestBody: UpdateStaffDto;
    }): CancelablePromise<StoreUser>;
    /**
     * @returns StoreUser Ok
     * @throws ApiError
     */
    deleteStaff({ storeId, userId, }: {
        storeId: number;
        userId: string;
    }): CancelablePromise<StoreUser>;
}
