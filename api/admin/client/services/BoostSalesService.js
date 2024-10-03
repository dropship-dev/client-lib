"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoostSalesService = void 0;
class BoostSalesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getBoostSaleByPermalinkSideStore({ storeId, permalink, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/boost-sales/get-boost-sale-permalink-side-store',
            path: {
                'storeId': storeId,
            },
            query: {
                'permalink': permalink,
            },
            errors: {
                400: `Bad request`,
                401: `Invalid token`,
                403: `Forbidden`,
                404: `Not found`,
                500: `Internal server error`,
            },
        });
    }
}
exports.BoostSalesService = BoostSalesService;
