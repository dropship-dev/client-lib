import type { CreateDomainDto } from '../models/CreateDomainDto';
import type { CustomDomain } from '../models/CustomDomain';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DomainService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    createDomain({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateDomainDto;
    }): CancelablePromise<CustomDomain>;
    /**
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    getAllDomain({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<CustomDomain>>;
    /**
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    getDomain({ storeId, domain, }: {
        storeId: string;
        domain: string;
    }): CancelablePromise<CustomDomain>;
    /**
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    verifyDomain({ storeId, domain, }: {
        storeId: string;
        domain: string;
    }): CancelablePromise<CustomDomain>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateToPrimaryDomain({ storeId, domain, }: {
        storeId: string;
        domain: string;
    }): CancelablePromise<void>;
    /**
     * @returns CustomDomain Ok
     * @throws ApiError
     */
    deleteDomain({ storeId, domain, }: {
        storeId: string;
        domain: string;
    }): CancelablePromise<CustomDomain>;
}
