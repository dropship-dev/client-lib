import type { BatchPayload } from '../models/BatchPayload';
import type { Collection } from '../models/Collection';
import type { CrossSell } from '../models/CrossSell';
import type { CrossSellDto } from '../models/CrossSellDto';
import type { CrossSellTriggerType } from '../models/CrossSellTriggerType';
import type { CrossSellType } from '../models/CrossSellType';
import type { JsonValue } from '../models/JsonValue';
import type { PlacementCrossSellType } from '../models/PlacementCrossSellType';
import type { Product } from '../models/Product';
import type { UpdateCrossSellStatusDto } from '../models/UpdateCrossSellStatusDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CrossSellService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    createCrossSell({ storeId, requestBody, }: {
        storeId: string;
        requestBody: CrossSellDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllCrossSell({ storeId, pageSize, nextPageIndex, startDate, endDate, search, crossSellType, crossSellStatus, }: {
        storeId: string;
        pageSize?: number;
        nextPageIndex?: number;
        startDate?: string;
        endDate?: string;
        search?: string;
        crossSellType?: Array<CrossSellType>;
        crossSellStatus?: boolean;
    }): CancelablePromise<{
        orderBy: string;
        nextPageIndex: number;
        prePageIndex: number;
        total: number;
        data: Array<CrossSell>;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getCrossSell({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<{
        updatedAt: string;
        createdAt: string;
        storeId: string;
        queriesRaw: string;
        triggerBy: CrossSellTriggerType;
        discount: JsonValue;
        placement: PlacementCrossSellType;
        status: boolean;
        type: CrossSellType;
        name: string;
        id: number;
        Collection: Array<Collection>;
        Product: Array<Product>;
    }>;
    /**
     * @returns string Ok
     * @throws ApiError
     */
    updateCrossSell({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: CrossSellDto;
    }): CancelablePromise<string>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteCrossSell({ id, storeId, }: {
        id: number;
        storeId: string;
    }): CancelablePromise<(CrossSell & {
        Product: Array<Product>;
        Collection: Array<Collection>;
    })>;
    /**
     * @returns void
     * @throws ApiError
     */
    updateStatusCrossSell({ id, storeId, requestBody, }: {
        id: number;
        storeId: string;
        requestBody: UpdateCrossSellStatusDto;
    }): CancelablePromise<void>;
    /**
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    deleteManyCrossSell({ id, storeId, }: {
        id: Array<number>;
        storeId: string;
    }): CancelablePromise<BatchPayload>;
}