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
    getAllStoreTransaction({ storeId, transactionType, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/transaction',
            path: {
                'storeId': storeId,
            },
            query: {
                'transactionType': transactionType,
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
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
     * @returns Transaction Ok
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
