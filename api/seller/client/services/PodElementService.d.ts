import type { CreateElementDto } from '../models/CreateElementDto';
import type { PodElement } from '../models/PodElement';
import type { UpdateElementDto } from '../models/UpdateElementDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodElementService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createElement({ requestBody, }: {
        requestBody: CreateElementDto;
    }): CancelablePromise<{
        message: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllElement({ nextPageIndex, limit, }: {
        nextPageIndex?: number;
        limit?: number;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            name: string;
            PodElement: Array<{
                url: string;
                name: string;
            }>;
            id: number;
        }>;
    }>;
    /**
     * @returns PodElement Ok
     * @throws ApiError
     */
    updateElement({ id, requestBody, }: {
        id: number;
        requestBody: UpdateElementDto;
    }): CancelablePromise<PodElement>;
    /**
     * @returns PodElement Ok
     * @throws ApiError
     */
    deleteElement({ id, }: {
        id: number;
    }): CancelablePromise<PodElement>;
}
