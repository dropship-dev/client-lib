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
        storeId: string;
        requestBody: CreateStaffDto;
    }): CancelablePromise<StoreUser>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStaff({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<(StoreUser & {
        User: {
            updatedAt: string;
            createdAt: string;
            avatar: string;
            email: string;
            name: string;
            id: string;
        };
    })>>;
    /**
     * @returns StoreUser Ok
     * @throws ApiError
     */
    updateStaff({ storeId, userId, requestBody, }: {
        storeId: string;
        userId: string;
        requestBody: UpdateStaffDto;
    }): CancelablePromise<StoreUser>;
    /**
     * @returns StoreUser Ok
     * @throws ApiError
     */
    deleteStaff({ storeId, userId, }: {
        storeId: string;
        userId: string;
    }): CancelablePromise<StoreUser>;
}
