import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class PodDesignService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns string Ok
     * @throws ApiError
     */
    getPrintAreaByStore({ storeId, }: {
        storeId: string;
    }): CancelablePromise<Array<string>>;
}
