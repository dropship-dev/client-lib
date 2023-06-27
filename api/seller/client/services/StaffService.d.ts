import type { CreateStaffDto } from '../models/CreateStaffDto';
import type { GetResult_any_any_any_ } from '../models/GetResult_any_any_any_';
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
        storeId: number;
        requestBody: CreateStaffDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStaff({ storeId, }: {
        storeId: number;
    }): CancelablePromise<Array<({
        User: {
            updatedAt: string;
            createdAt: string;
            name: string;
            avatar: string;
            email: string;
            id: string;
        };
    } & GetResult_any_any_any_)>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateStaff({ storeId, userId, requestBody, }: {
        storeId: number;
        userId: string;
        requestBody: UpdateStaffDto;
    }): CancelablePromise<GetResult_any_any_any_>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteStaff({ storeId, userId, }: {
        storeId: number;
        userId: string;
    }): CancelablePromise<GetResult_any_any_any_>;
}
