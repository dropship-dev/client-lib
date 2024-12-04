import type { PrismaJson_CountryInformation } from '../models/PrismaJson_CountryInformation';
import type { RegionalShippingFeeDto } from '../models/RegionalShippingFeeDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class RegionalShippingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createRegionalShippingFee({ storeId, requestBody, }: {
        storeId: string;
        requestBody: RegionalShippingFeeDto;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        deleted: boolean;
        shippingFeeAdditional: number;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRegionalShippingFee({ storeId, search, startDate, endDate, pageSize, nextPageIndex, }: {
        storeId: string;
        search?: string;
        startDate?: string;
        endDate?: string;
        pageSize?: number;
        nextPageIndex?: string;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: string;
        prePageIndex: string;
        total: number;
        data: Array<{
            countries: PrismaJson_CountryInformation;
            zoneName: string;
            deleted: boolean;
            shippingFeeAdditional: number;
            shippingFee: number;
            updatedAt: string;
            createdAt: string;
            storeId: string;
            id: string;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getCountriesExistOnStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<string>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRegionalShippingFee({ storeId, id, }: {
        storeId: string;
        id: string;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        deleted: boolean;
        shippingFeeAdditional: number;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteReasonShippingFee({ storeId, id, }: {
        storeId: string;
        id: string;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        deleted: boolean;
        shippingFeeAdditional: number;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateReasonShippingFee({ storeId, id, requestBody, }: {
        storeId: string;
        id: string;
        requestBody: RegionalShippingFeeDto;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        deleted: boolean;
        shippingFeeAdditional: number;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        storeId: string;
        id: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    resetSetting({ storeId, }: {
        storeId: string;
    }): CancelablePromise<string>;
}
