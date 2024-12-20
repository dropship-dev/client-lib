import type { CreateElementDto } from '../models/CreateElementDto';
import type { IPageDetail } from '../models/IPageDetail';
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
    getAllElement({ page, limit, }: {
        page?: number;
        limit?: number;
    }): CancelablePromise<{
        data: Array<{
            PodElement: Array<{
                url: string;
                name: string;
            }>;
            order: number;
            name: string;
            id: number;
        }>;
        pageDetail: IPageDetail;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateElement({ id, requestBody, }: {
        id: number;
        requestBody: UpdateElementDto;
    }): CancelablePromise<{
        podElementTypeId: number;
        url: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteElement({ id, }: {
        id: number;
    }): CancelablePromise<{
        podElementTypeId: number;
        url: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
}
