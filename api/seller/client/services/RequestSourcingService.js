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
            url: '/store/{storeId}/request-sourcing',
            path: {
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
    getAllRequestSourcing({ storeId, statusRequest, search, startDate, endDate, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/request-sourcing',
            path: {
                'storeId': storeId,
            },
            query: {
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
    getRequestSourcing({ storeId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/request-sourcing/{id}',
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
    /**
     * @returns RequestSourcing Ok
     * @throws ApiError
     */
    updateRequestSourcing({ storeId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/request-sourcing/{id}',
            path: {
                'storeId': storeId,
                'id': id,
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
            url: '/store/{storeId}/request-sourcing/{id}',
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
exports.RequestSourcingService = RequestSourcingService;
