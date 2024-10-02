import type { BuyDomainDto } from '../models/BuyDomainDto';
import type { CreateDomainDto } from '../models/CreateDomainDto';
import type { CustomDomain } from '../models/CustomDomain';
import type { CustomDomainStatus } from '../models/CustomDomainStatus';
import type { DomainContactInfo } from '../models/DomainContactInfo';
import type { DomainOrigin } from '../models/DomainOrigin';
import type { RenewDomainDto } from '../models/RenewDomainDto';
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
     * @returns any Ok
     * @throws ApiError
     */
    getAllDomain({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        updatedAt: string;
        createdAt: string;
        isPrimary: boolean;
        storeId: string;
        contactInfo: DomainContactInfo;
        renewable: boolean;
        renewalPrice: number;
        purchasePrice: number;
        domainOrigin: DomainOrigin;
        autoRenew: boolean;
        expirationDate: string;
        status: CustomDomainStatus;
        target: string;
        domain: string;
        id: number;
        nextChargeDate: string;
    }>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    buyDomain({ storeId, requestBody, }: {
        storeId: string;
        requestBody: BuyDomainDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    searchDomain({ storeId, keyword, }: {
        storeId: string;
        keyword: string;
    }): CancelablePromise<Array<{
        purchaseType: string;
        renewalPrice: number;
        purchasePrice: number;
        purchasable: boolean;
        domainName: string;
    }>>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    switchAutoRenewDomain({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<string>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    renewDomainManually({ storeId, id, requestBody, }: {
        storeId: string;
        id: number;
        requestBody?: RenewDomainDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDomain({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<{
        updatedAt: string;
        createdAt: string;
        isPrimary: boolean;
        storeId: string;
        contactInfo: DomainContactInfo;
        renewable: boolean;
        renewalPrice: number;
        purchasePrice: number;
        domainOrigin: DomainOrigin;
        autoRenew: boolean;
        expirationDate: string;
        status: CustomDomainStatus;
        target: string;
        domain: string;
        id: number;
        nextChargeDate: string;
    }>;
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
