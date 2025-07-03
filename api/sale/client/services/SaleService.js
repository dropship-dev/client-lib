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
    getSaleInfo() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale',
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
    getTrackingPerformance({ startDate = '2023-01-01T00:00:00.000Z', endDate, cursor, limit, search, status, sort, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/tracking-performance',
            query: {
                'startDate': startDate,
                'endDate': endDate,
                'cursor': cursor,
                'limit': limit,
                'search': search,
                'status': status,
                'sort': sort,
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
    getListSellerInvitedBySale({ nextPageIndex, pageSize = 20, keyword, startDate, endDate, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/seller-invited',
            query: {
                'nextPageIndex': nextPageIndex,
                'pageSize': pageSize,
                'keyword': keyword,
                'startDate': startDate,
                'endDate': endDate,
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
    getDetailSellerInvited({ id, nextPageIndex, pageSize = 20, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/seller-invited/{id}',
            path: {
                'id': id,
            },
            query: {
                'nextPageIndex': nextPageIndex,
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
     * @returns boolean Ok
     * @throws ApiError
     */
    checkVerifyEmailSale({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sale/verify-email',
            body: requestBody,
            mediaType: 'application/json',
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
    checkRejectStatus({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/sale/reject-status',
            body: requestBody,
            mediaType: 'application/json',
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
     * @returns void
     * @throws ApiError
     */
    get1X1PixelImage({ data, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sale/tracking-images',
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
