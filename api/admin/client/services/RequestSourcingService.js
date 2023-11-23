"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSourcingService = void 0;
class RequestSourcingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllRequestSourcing({ storeId, fulfillmentAgencyId, statusRequest, search, startDate, endDate, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-sourcing',
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'statusRequest': statusRequest,
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
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
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    getRequestSourcing({ id, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/request-sourcing/{id}',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    approveRequestSourcing({ storeId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-sourcing/{id}/approve',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
            },
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
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    rejectRequestSourcing({ storeId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-sourcing/{id}/reject',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
            },
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
}
exports.RequestSourcingService = RequestSourcingService;
