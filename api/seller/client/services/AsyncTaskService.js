"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncTaskService = void 0;
class AsyncTaskService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createExportOrderTask({ exportedFilename, fulfillmentAgencyId, storeId, paymentStatus, fulfillmentStatus, search, productName, startDate, endDate, startTotal, endTotal, gateway, disputeStatus, latestStat = false, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/async-task/export-order',
            query: {
                'exportedFilename': exportedFilename,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'storeId': storeId,
                'paymentStatus': paymentStatus,
                'fulfillmentStatus': fulfillmentStatus,
                'search': search,
                'productName': productName,
                'startDate': startDate,
                'endDate': endDate,
                'startTotal': startTotal,
                'endTotal': endTotal,
                'gateway': gateway,
                'disputeStatus': disputeStatus,
                'latestStat': latestStat,
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
    getAsyncTask({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async-task/{id}',
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
exports.AsyncTaskService = AsyncTaskService;
