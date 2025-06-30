"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleService = void 0;
class SaleService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAccountRequest({ nextPageIndex, pageSize = 20, keyword, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/account-request',
            query: {
                'nextPageIndex': nextPageIndex,
                'pageSize': pageSize,
                'keyword': keyword,
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
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getDetailSaleInfo({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/{id}',
            path: {
                'id': id,
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
exports.SaleService = SaleService;
