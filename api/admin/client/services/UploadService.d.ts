import type { CreateUploadDto } from '../models/CreateUploadDto';
import type { CreateUploadImageDataDto } from '../models/CreateUploadImageDataDto';
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createUploadImageData({ requestBody, }: {
        requestBody: CreateUploadImageDataDto;
    }): CancelablePromise<{
        id: number;
        signedUrl: string;
    }>;
}
