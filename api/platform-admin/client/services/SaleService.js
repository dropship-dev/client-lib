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
    requestStatus({ userId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/request-status',
            query: {
                'userId': userId,
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
     * @returns string Ok
     * @throws ApiError
     */
    updateRequest({ requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/sale/request-status',
            body: requestBody,
            mediaType: 'application/json',
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
     * @returns string Ok
     * @throws ApiError
     */
    trackingOpenRequest({ data, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/tracking-open-request',
            query: {
                'data': data,
                'token': token,
            },
            errors: {
                400: `Bad request`,
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
    searchSale({ nextPageIndex, keyword, pageSize = 20, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/search',
            query: {
                'nextPageIndex': nextPageIndex,
                'keyword': keyword,
                'pageSize': pageSize,
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
     * @returns SaleInfoResponsive Ok
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
