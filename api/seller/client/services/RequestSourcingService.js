"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestSourcingService = void 0;
class RequestSourcingService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    createRequestSourcing({ storeId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-sourcing',
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
    updateRequestSourcing({ storeId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/request-sourcing/{id}',
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
    deleteRequestSourcing({ storeId, id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/request-sourcing/{id}',
            path: {
                'id': id,
            },
            query: {
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
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    approveRequestSourcing({ id, requestBody, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-sourcing/{id}/approve',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
    rejectRequestSourcing({ id, requestBody, storeId, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/request-sourcing/{id}/reject',
            path: {
                'id': id,
            },
            query: {
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
