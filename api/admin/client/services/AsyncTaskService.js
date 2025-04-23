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
    createExportPayoutRequestTask({ fulfillmentAgencyId, exportedFilename, startDate, endDate, statuses, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/async-task/export-payout-request',
            query: {
                'exportedFilename': exportedFilename,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
                'statuses': statuses,
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
    createExportAccountancyTask({ exportedFilename, fulfillmentAgencyId, startDate, endDate, storeId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/async-task/export-accountancy',
            query: {
                'exportedFilename': exportedFilename,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'startDate': startDate,
                'endDate': endDate,
                'storeId': storeId,
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
     * @returns AsyncTask Ok
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
