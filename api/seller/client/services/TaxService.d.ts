import type { ClearCacheDto } from '../models/ClearCacheDto';
import type { ConnectQuadernoDto } from '../models/ConnectQuadernoDto';
import type { TaxProviderItem } from '../models/TaxProviderItem';
import type { UpdateConfigTaxProviderDto } from '../models/UpdateConfigTaxProviderDto';
import type { UpdateNameTaxProviderDto } from '../models/UpdateNameTaxProviderDto';
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
}
