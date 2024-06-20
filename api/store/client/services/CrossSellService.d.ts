import type { Collection } from '../models/Collection';
import type { CrossSellTriggerType } from '../models/CrossSellTriggerType';
import type { CrossSellType } from '../models/CrossSellType';
import type { JsonValue } from '../models/JsonValue';
import type { PlacementCrossSellType } from '../models/PlacementCrossSellType';
import type { Product } from '../models/Product';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class CrossSellService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
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
}
