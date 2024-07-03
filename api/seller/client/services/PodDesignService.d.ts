import type { BatchPayload } from '../models/BatchPayload';
import type { CreateDesignDto } from '../models/CreateDesignDto';
import type { Design } from '../models/Design';
import type { File } from '../models/File';
import type { IPageDetail } from '../models/IPageDetail';
import type { MultiplePublishToStoreDto } from '../models/MultiplePublishToStoreDto';
import type { PhotoDesign } from '../models/PhotoDesign';
import type { Product } from '../models/Product';
import type { PublishToProductDto } from '../models/PublishToProductDto';
import type { UpdateDesignDto } from '../models/UpdateDesignDto';
import type { VariantOptions } from '../models/VariantOptions';
import type { VariantOptionValues } from '../models/VariantOptionValues';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodDesignService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns Design Ok
     * @throws ApiError
     */
    createNewDesign({ requestBody, }: {
        requestBody: CreateDesignDto;
    }): CancelablePromise<Design>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllDesign({ storeId, page, limit, name, printArea, }: {
        storeId: string;
        page?: number;
        limit?: number;
        name?: string;
        printArea?: string;
    }): CancelablePromise<({
        data: Array<{
            printArea: Array<string>;
            isDraft: boolean;
            isActive: boolean;
            variantOption: VariantOptions;
            sizeGuide: string;
            description: string;
            name: string;
            storeId: string;
            templateId: number;
            id: number;
        }>;
        pageDetail: IPageDetail;
    } | boolean)>;
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    deleteMyDesign({ requestBody, }: {
        requestBody: Array<number>;
    }): CancelablePromise<BatchPayload>;
    /**
     * @returns Product Ok
     * @throws ApiError
     */
    publishToProduct({ requestBody, }: {
        requestBody: PublishToProductDto;
    }): CancelablePromise<Product>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    multiplePublishToProduct({ requestBody, }: {
        requestBody: MultiplePublishToStoreDto;
    }): CancelablePromise<{
        message: string;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    detailMyDesign({ id, }: {
        id: number;
    }): CancelablePromise<{
        designVariant: Array<{
            templateVariantId: number;
            price: number;
            minSellingPrice: number;
            isDisable: boolean;
            isActive: boolean;
            comparePrice: number;
            variantOption: VariantOptionValues;
            name: string;
            id: number;
        }>;
        myDesign: {
            isDraft: boolean;
            supplierContract: string;
            sku: string;
            sizeGuide: string;
            templateId: number;
            photos: PhotoDesign;
            description: string;
            name: string;
            id: number;
            storeId: string;
        };
        printArea: Array<{
            faPrice: number;
            supplierCost: number;
            name: string;
            id: number;
            File: File;
        }>;
        templateInformation: {
            blank: {
                maxPrice: number;
                minPrice: number;
            };
        };
    }>;
    /**
     * @returns Design Ok
     * @throws ApiError
     */
    updateMyDesign({ id, requestBody, }: {
        id: number;
        requestBody: UpdateDesignDto;
    }): CancelablePromise<Design>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getPrintAreaByStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<string>>;
}
