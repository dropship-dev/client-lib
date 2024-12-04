import type { _36_Enums_CustomDomainStatus } from '../models/_36_Enums_CustomDomainStatus';
import type { _36_Enums_DomainOrigin } from '../models/_36_Enums_DomainOrigin';
import type { BuyDomainDto } from '../models/BuyDomainDto';
import type { CreateDomainDto } from '../models/CreateDomainDto';
import type { PrismaJson_DomainContactInfo } from '../models/PrismaJson_DomainContactInfo';
import type { RenewDomainDto } from '../models/RenewDomainDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DomainService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createDomain({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CreateDomainDto;
    }): CancelablePromise<{
        isPrimary: boolean;
        contactInfo: PrismaJson_DomainContactInfo;
        renewable: boolean;
        renewalPrice: number;
        purchasePrice: number;
        domainOrigin: _36_Enums_DomainOrigin;
        autoRenew: boolean;
        expirationDate: string;
        target: string;
        domain: string;
        status: _36_Enums_CustomDomainStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllDomain({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<{
        isPrimary: boolean;
        contactInfo: PrismaJson_DomainContactInfo;
        renewable: boolean;
        renewalPrice: number;
        purchasePrice: number;
        domainOrigin: _36_Enums_DomainOrigin;
        autoRenew: boolean;
        expirationDate: string;
        target: string;
        domain: string;
        status: _36_Enums_CustomDomainStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
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
     * @returns void
     * @throws ApiError
     */
    disableDomainRenewal({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDomain({ storeId, id, }: {
        storeId: string;
        id: number;
    }): CancelablePromise<{
        isPrimary: boolean;
        contactInfo: PrismaJson_DomainContactInfo;
        renewable: boolean;
        renewalPrice: number;
        purchasePrice: number;
        domainOrigin: _36_Enums_DomainOrigin;
        autoRenew: boolean;
        expirationDate: string;
        target: string;
        domain: string;
        status: _36_Enums_CustomDomainStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
        nextChargeDate: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    verifyDomain({ storeId, domain, }: {
        storeId: string;
        domain: string;
    }): CancelablePromise<{
        isPrimary: boolean;
        contactInfo: PrismaJson_DomainContactInfo;
        renewable: boolean;
        renewalPrice: number;
        purchasePrice: number;
        domainOrigin: _36_Enums_DomainOrigin;
        autoRenew: boolean;
        expirationDate: string;
        target: string;
        domain: string;
        status: _36_Enums_CustomDomainStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateToPrimaryDomain({ storeId, domain, }: {
        storeId: string;
        domain: string;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteDomain({ storeId, domain, }: {
        storeId: string;
        domain: string;
    }): CancelablePromise<{
        isPrimary: boolean;
        contactInfo: PrismaJson_DomainContactInfo;
        renewable: boolean;
        renewalPrice: number;
        purchasePrice: number;
        domainOrigin: _36_Enums_DomainOrigin;
        autoRenew: boolean;
        expirationDate: string;
        target: string;
        domain: string;
        status: _36_Enums_CustomDomainStatus;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: number;
    }>;
}
