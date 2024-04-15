"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionService = void 0;
class TransactionService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllStoreTransaction({ storeId, fulfillmentAgencyId, search, startDate, endDate, pageSize = 20, nextPageIndex, walletId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/transaction',
            path: {
                'storeId': storeId,
            },
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'walletId': walletId,
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
    getStoreTransaction({ storeId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/transaction/{id}',
            path: {
                'storeId': storeId,
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
exports.TransactionService = TransactionService;
