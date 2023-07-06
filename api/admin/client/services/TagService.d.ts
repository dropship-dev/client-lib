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
    createTag({ requestBody, }: {
        requestBody: CreateTagDto;
    }): CancelablePromise<AdminTag>;
    /**
     * @returns AdminTag Ok
     * @throws ApiError
     */
    getTags({ search, }: {
        search?: string;
    }): CancelablePromise<Array<AdminTag>>;
    /**
     * @returns AdminTag Ok
     * @throws ApiError
     */
    getTag({ id, }: {
        id: string;
    }): CancelablePromise<AdminTag>;
}
