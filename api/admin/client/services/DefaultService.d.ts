import type { _36_Enums_CollectionStatus } from '../models/_36_Enums_CollectionStatus';
import type { _36_Enums_CollectionType } from '../models/_36_Enums_CollectionType';
import type { CreateCollectionDefaultDto } from '../models/CreateCollectionDefaultDto';
import type { FulfillmentShippingCostDto } from '../models/FulfillmentShippingCostDto';
import type { PrismaJson_ConditionCollection } from '../models/PrismaJson_ConditionCollection';
import type { PrismaJson_CountryInformation } from '../models/PrismaJson_CountryInformation';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { PrismaJson_PlatformCostInfo } from '../models/PrismaJson_PlatformCostInfo';
import type { PrismaJson_SettingPayoutRequestTime } from '../models/PrismaJson_SettingPayoutRequestTime';
import type { SettingPayoutRequestDto } from '../models/SettingPayoutRequestDto';
import type { UpdateCollectionDefaultDto } from '../models/UpdateCollectionDefaultDto';
import type { UpdateCollectionDefaultStatusDto } from '../models/UpdateCollectionDefaultStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createFulfillmentShippingFee({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: FulfillmentShippingCostDto;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        settingId: number;
        deleted: boolean;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRegionalShippingFee({ fulfillmentAgencyId, search, startDate, endDate, pageSize, nextPageIndex, }: {
        fulfillmentAgencyId: number;
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
            settingId: number;
            deleted: boolean;
            shippingFee: number;
            updatedAt: string;
            createdAt: string;
            id: string;
        }>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getCountriesExistOnStore({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<Array<string>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getRegionalShippingFee({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: string;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        settingId: number;
        deleted: boolean;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteReasonShippingFee({ fulfillmentAgencyId, id, }: {
        fulfillmentAgencyId: number;
        id: string;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        settingId: number;
        deleted: boolean;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        id: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateReasonShippingFee({ fulfillmentAgencyId, id, requestBody, }: {
        fulfillmentAgencyId: number;
        id: string;
        requestBody: FulfillmentShippingCostDto;
    }): CancelablePromise<{
        countries: PrismaJson_CountryInformation;
        zoneName: string;
        settingId: number;
        deleted: boolean;
        shippingFee: number;
        updatedAt: string;
        createdAt: string;
        id: string;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    resetSetting({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getSettingPayoutRequest({ fulfillmentAgencyId, }: {
        fulfillmentAgencyId: number;
    }): CancelablePromise<{
        receiverRequestDay: PrismaJson_SettingPayoutRequestTime;
        receiverRequestTime: PrismaJson_SettingPayoutRequestTime;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateSettingPayoutRequest({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: SettingPayoutRequestDto;
    }): CancelablePromise<{
        receiverRequestDay: PrismaJson_SettingPayoutRequestTime;
        receiverRequestTime: PrismaJson_SettingPayoutRequestTime;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCollectionDefault({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: CreateCollectionDefaultDto;
    }): CancelablePromise<{
        SEO: any;
        condition: PrismaJson_ConditionCollection;
        settingId: number;
        photos: PrismaJson_Photos;
        description: string;
        type: _36_Enums_CollectionType;
        status: _36_Enums_CollectionStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllCollectionDefault({ fulfillmentAgencyId, pageSize, nextPageIndex, startDate, endDate, search, collectionType, collectionStatus, }: {
        fulfillmentAgencyId: number;
        pageSize?: number;
        nextPageIndex?: number;
        startDate?: string;
        endDate?: string;
        search?: string;
        collectionType?: _36_Enums_CollectionType;
        collectionStatus?: _36_Enums_CollectionStatus;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<({
            PlatformProduct: Array<{
                isEnable: boolean;
                deleted: boolean;
                photos: PrismaJson_Photos;
                isActive: boolean;
                name: string;
                id: number;
                PlatformVariant: Array<{
                    cost: PrismaJson_PlatformCostInfo;
                    price: number;
                }>;
            }>;
        } & {
            SEO: any;
            condition: PrismaJson_ConditionCollection;
            settingId: number;
            photos: PrismaJson_Photos;
            description: string;
            type: _36_Enums_CollectionType;
            status: _36_Enums_CollectionStatus;
            name: string;
            updatedAt: string;
            createdAt: string;
            id: number;
        })>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCollection({ id, fulfillmentAgencyId, isActiveProduct, isEnableProduct, deletedProduct, }: {
        id: number;
        fulfillmentAgencyId: number;
        isActiveProduct?: boolean;
        isEnableProduct?: boolean;
        deletedProduct?: boolean;
    }): CancelablePromise<({
        PlatformProduct: Array<{
            isEnable: boolean;
            deleted: boolean;
            photos: PrismaJson_Photos;
            isActive: boolean;
            name: string;
            id: number;
            PlatformVariant: Array<{
                cost: PrismaJson_PlatformCostInfo;
                price: number;
            }>;
        }>;
    } & {
        SEO: any;
        condition: PrismaJson_ConditionCollection;
        settingId: number;
        photos: PrismaJson_Photos;
        description: string;
        type: _36_Enums_CollectionType;
        status: _36_Enums_CollectionStatus;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    })>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteCollection({ id, fulfillmentAgencyId, }: {
        id: number;
        fulfillmentAgencyId: number;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateCollection({ id, fulfillmentAgencyId, requestBody, }: {
        id: number;
        fulfillmentAgencyId: number;
        requestBody: UpdateCollectionDefaultDto;
    }): CancelablePromise<void>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyCollection({ id, fulfillmentAgencyId, }: {
        id: Array<number>;
        fulfillmentAgencyId: number;
    }): CancelablePromise<string>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusesCollection({ fulfillmentAgencyId, requestBody, }: {
        fulfillmentAgencyId: number;
        requestBody: UpdateCollectionDefaultStatusDto;
    }): CancelablePromise<void>;
}
