import type { CreateLogDto } from '../models/CreateLogDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class LogService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    createLog({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateLogDto;
    }): CancelablePromise<void>;
}
