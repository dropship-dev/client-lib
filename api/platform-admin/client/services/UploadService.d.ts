import type { CreateUploadDto } from '../models/CreateUploadDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class UploadService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createUpload({ requestBody, }: {
        requestBody: CreateUploadDto;
    }): CancelablePromise<{
        url: string;
        signedUrl: string;
    }>;
}
