import type { AdminTag } from '../models/AdminTag';
import type { CreateTagDto } from '../models/CreateTagDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TagService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns AdminTag Ok
     * @throws ApiError
     */
    createTag({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: CreateTagDto;
    }): CancelablePromise<AdminTag>;
    /**
     * @returns AdminTag Ok
     * @throws ApiError
     */
    getTags({ fulfillmentAgencyId, search, limit, }: {
        fulfillmentAgencyId: number;
        search?: string;
        limit?: number;
    }): CancelablePromise<Array<AdminTag>>;
    /**
     * @returns AdminTag Ok
     * @throws ApiError
     */
    getTag({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: string;
    }): CancelablePromise<AdminTag>;
}