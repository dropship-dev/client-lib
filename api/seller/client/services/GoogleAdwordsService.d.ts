import type { CreateGoogleAdWordsDto } from '../models/CreateGoogleAdWordsDto';
import type { CreateGoogleAdWordsResponse } from '../models/CreateGoogleAdWordsResponse';
import type { GetGoogleAdWordsResponse } from '../models/GetGoogleAdWordsResponse';
import type { UpdateGoogleAdWordsDto } from '../models/UpdateGoogleAdWordsDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class GoogleAdwordsService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns CreateGoogleAdWordsResponse Ok
     * @throws ApiError
     */
    createGoogleAdWords({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateGoogleAdWordsDto;
    }): CancelablePromise<CreateGoogleAdWordsResponse>;
    /**
     * @returns GetGoogleAdWordsResponse Ok
     * @throws ApiError
     */
    listGoogleAdWords({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<GetGoogleAdWordsResponse>>;
    /**
     * @returns GetGoogleAdWordsResponse Ok
     * @throws ApiError
     */
    getGoogleAdWords({ storeId, conversionId, }: {
        storeId: string;
        conversionId: string;
    }): CancelablePromise<GetGoogleAdWordsResponse>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateGoogleAdWords({ storeId, conversionId, requestBody, }: {
        storeId: string;
        conversionId: string;
        requestBody: UpdateGoogleAdWordsDto;
    }): CancelablePromise<{
        conversionLabel: string;
        conversionId: string;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteGoogleAdWords({ storeId, conversionId, }: {
        storeId: string;
        conversionId: string;
    }): CancelablePromise<string>;
}
