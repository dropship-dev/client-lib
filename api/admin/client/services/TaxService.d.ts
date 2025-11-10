import type { _36_Enums_AsyncTaskStatus } from '../models/_36_Enums_AsyncTaskStatus';
import type { _36_Enums_TaxProviderOwner } from '../models/_36_Enums_TaxProviderOwner';
import type { _36_Enums_TaxProviderType } from '../models/_36_Enums_TaxProviderType';
import type { ClearCacheDto } from '../models/ClearCacheDto';
import type { ConnectCustomTaxDto } from '../models/ConnectCustomTaxDto';
import type { ConnectQuadernoDto } from '../models/ConnectQuadernoDto';
import type { ImportTaxDataDto } from '../models/ImportTaxDataDto';
import type { PrismaJson_AsyncTaskResult } from '../models/PrismaJson_AsyncTaskResult';
import type { PrismaJson_TaxCustomDataJSON } from '../models/PrismaJson_TaxCustomDataJSON';
import type { TaxProviderItem } from '../models/TaxProviderItem';
import type { UpdateConfigTaxProviderDto } from '../models/UpdateConfigTaxProviderDto';
import type { UpdateNameTaxProviderDto } from '../models/UpdateNameTaxProviderDto';
import type { UploadTaxDataDto } from '../models/UploadTaxDataDto';
import type { ValidateQuadernoDto } from '../models/ValidateQuadernoDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class TaxService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns void
     * @throws ApiError
     */
    connectQuaderno({ requestBody, }: {
        requestBody: ConnectQuadernoDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    clearCache({ requestBody, }: {
        requestBody: ClearCacheDto;
    }): CancelablePromise<void>;
    /**
     * @returns TaxProviderItem Ok
     * @throws ApiError
     */
    getListTaxProvider({ storeId, fulfillmentAgencyId, }: {
        /**
         * Store id (optional), but required when role is SELLER
         */
        storeId?: string;
        /**
         * Fulfillment agency id (optional), but required when role is ADMIN
         */
        fulfillmentAgencyId?: number;
    }): CancelablePromise<Array<TaxProviderItem>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDetailTaxProvider({ taxProviderId, storeId, fulfillmentAgencyId, }: {
        taxProviderId: number;
        /**
         * Store id (optional), but required when role is SELLER
         */
        storeId?: string;
        /**
         * Fulfillment agency id (optional), but required when role is ADMIN
         */
        fulfillmentAgencyId?: number;
    }): CancelablePromise<{
        name: string;
        url: string;
        publicKey: string;
        id: number;
    }>;
    /**
     * @returns void
     * @throws ApiError
     */
    removeTaxProviderCache({ taxProviderId, storeId, fulfillmentAgencyId, }: {
        taxProviderId: number;
        /**
         * Store id (optional), but required when role is SELLER
         */
        storeId?: string;
        /**
         * Fulfillment agency id (optional), but required when role is ADMIN
         */
        fulfillmentAgencyId?: number;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    validateQuaderno({ requestBody, }: {
        requestBody: ValidateQuadernoDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateNameTaxProvider({ taxProviderId, requestBody, }: {
        taxProviderId: number;
        requestBody: UpdateNameTaxProviderDto;
    }): CancelablePromise<void>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateConfigTaxProvider({ taxProviderId, requestBody, }: {
        taxProviderId: number;
        requestBody: UpdateConfigTaxProviderDto;
    }): CancelablePromise<void>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createTaxDataGroup(): CancelablePromise<{
        expiredAt: string;
        groupId: string;
        token: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    uploadTaxData({ requestBody, }: {
        requestBody: UploadTaxDataDto;
    }): CancelablePromise<{
        signedUrl: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    importTaxData({ requestBody, }: {
        requestBody: ImportTaxDataDto;
    }): CancelablePromise<{
        id: string;
        groupFound: {
            expiredAt: string;
            groupId: string;
            token: string;
            data: PrismaJson_TaxCustomDataJSON;
            updatedAt: string;
            createdAt: string;
            id: number;
        };
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getStatusImportTaxData({ taskId, }: {
        taskId: string;
    }): CancelablePromise<{
        result: PrismaJson_AsyncTaskResult;
        id: string;
        status: _36_Enums_AsyncTaskStatus;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    connectCustomTax({ requestBody, }: {
        requestBody: ConnectCustomTaxDto;
    }): CancelablePromise<{
        taxProvider: {
            owner: _36_Enums_TaxProviderOwner;
            url: string;
            publicKey: string;
            apiKey: string;
            salt: string;
            type: _36_Enums_TaxProviderType;
            name: string;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            fulfillmentAgencyId: number;
            id: number;
        };
    }>;
}
