import type { GetListCategoryByCatalog } from '../models/GetListCategoryByCatalog';
import type { GetListCategoryByCategory } from '../models/GetListCategoryByCategory';
import type { LayoutCategory } from '../models/LayoutCategory';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodCategoryService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListCategory({ fulfillmentAgencyId, storeId, search, startDate, endDate, layout, }: {
        fulfillmentAgencyId?: number;
        storeId?: string;
        search?: string;
        startDate?: string;
        endDate?: string;
        layout?: LayoutCategory;
    }): CancelablePromise<(Array<GetListCategoryByCatalog> | Array<GetListCategoryByCategory>)>;
}
