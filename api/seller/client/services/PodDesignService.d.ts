import type { BatchPayload } from '../models/BatchPayload';
import type { CreateDesignDto } from '../models/CreateDesignDto';
import type { IPageDetail } from '../models/IPageDetail';
import type { MultiplePublishToStoreDto } from '../models/MultiplePublishToStoreDto';
import type { PodDesign } from '../models/PodDesign';
import type { PodFile } from '../models/PodFile';
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
     * @returns PodDesign Ok
     * @throws ApiError
     */
    createNewDesign({ requestBody, }: {
        requestBody: CreateDesignDto;
    }): CancelablePromise<PodDesign>;
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
            podTemplateId: number;
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
            podTemplateId: number;
            description: string;
            name: string;
            PodFile: Array<PodFile>;
            id: number;
            storeId: string;
        };
        printArea: Array<{
            faPrice: number;
            supplierCost: number;
            name: string;
            PodFile: Array<PodFile>;
            id: number;
            File: PodFile;
        }>;
        templateInformation: {
            blank: {
                maxPrice: number;
                minPrice: number;
            };
        };
    }>;
    /**
     * @returns PodDesign Ok
     * @throws ApiError
     */
    updateMyDesign({ id, requestBody, }: {
        id: number;
        requestBody: UpdateDesignDto;
    }): CancelablePromise<PodDesign>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getPrintAreaByStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<string>>;
}
