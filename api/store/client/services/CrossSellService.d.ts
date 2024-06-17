import type { Collection } from '../models/Collection';
import type { CrossSell } from '../models/CrossSell';
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
    }): CancelablePromise<(CrossSell & {
        Product: Array<Product>;
        Collection: Array<Collection>;
    })>;
}
