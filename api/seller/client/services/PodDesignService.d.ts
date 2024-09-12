import type { BatchPayload } from '../models/BatchPayload';
import type { CreateDesignDto } from '../models/CreateDesignDto';
import type { DuplicateDesignDto } from '../models/DuplicateDesignDto';
import type { FileType } from '../models/FileType';
import type { MultiplePublishToStoreDto } from '../models/MultiplePublishToStoreDto';
import type { PodDesign } from '../models/PodDesign';
import type { PodFile } from '../models/PodFile';
import type { PodFileColors } from '../models/PodFileColors';
import type { PodFileGroupLayers } from '../models/PodFileGroupLayers';
import type { PodFileProperties } from '../models/PodFileProperties';
import type { PodMeshPoints } from '../models/PodMeshPoints';
import type { PrintAreaBounds } from '../models/PrintAreaBounds';
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
    getAllDesign({ storeId, limit, name, printArea, nextPageIndex, }: {
        storeId: string;
        limit?: number;
        name?: string;
        printArea?: Array<string>;
        nextPageIndex?: number;
    }): CancelablePromise<({
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<{
            url: string;
            printArea: Array<string>;
            isDraft: boolean;
            isActive: boolean;
            variantOption: Array<{
                total: number;
                name: string;
            }>;
            sizeGuide: string;
            description: string;
            name: string;
            storeId: string;
            podTemplateId: number;
            id: number;
        }>;
    } | boolean)>;
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    deleteMyDesign({ requestBody, }: {
        requestBody: Array<number>;
    }): CancelablePromise<BatchPayload>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    duplicateDesign({ requestBody, }: {
        requestBody: DuplicateDesignDto;
    }): CancelablePromise<{
        printArea: Array<any>;
        url: string;
        variantOption: Array<{
            total: number;
            name: string;
        }>;
        isDraft: boolean;
        isActive: boolean;
        sizeGuide: string;
        description: string;
        name: string;
        storeId: string;
        podTemplateId: number;
        id: number;
    }>;
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
        templateVariant: Array<{
            faPrice: number;
            minSellingPrice: number;
            supplierCost: number;
            sku: string;
            podTemplateId: number;
            variantOption: VariantOptionValues;
            name: string;
            id: number;
            isSelected: boolean;
        }>;
        designVariant: Array<{
            sku: string;
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
            keyFeature: string;
            podTemplateId: number;
            variantOption: VariantOptions;
            description: string;
            name: string;
            PodFile: Array<{
                podPrintAreaId: number;
                properties: PodFileProperties;
                color: PodFileColors;
                groupLayers: PodFileGroupLayers;
                fileName: string;
                type: FileType;
                id: number;
            }>;
            id: number;
            storeId: string;
        };
        printArea: Array<{
            printAreaBounds: PrintAreaBounds;
            meshPoints: PodMeshPoints;
            groupLayers: PodFileGroupLayers;
            photo: string;
            faPrice: number;
            supplierCost: number;
            name: string;
            id: number;
            PodFile: PodFile;
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
