"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultService = void 0;
class DefaultService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createCollectionDefault({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default',
            path: {
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
     * @returns any Ok
     * @throws ApiError
     */
    getAllCollectionDefault({ fulfillmentAgencyId, pageSize = 20, nextPageIndex, startDate, endDate, search, collectionType, collectionStatus, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
            query: {
                'pageSize': pageSize,
                'nextPageIndex': nextPageIndex,
                'startDate': startDate,
                'endDate': endDate,
                'search': search,
                'collectionType': collectionType,
                'collectionStatus': collectionStatus,
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
    getCollection({ id, fulfillmentAgencyId, isActiveProduct, isEnableProduct, deletedProduct, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/{id}',
            path: {
                'id': id,
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
            query: {
                'isActiveProduct': isActiveProduct,
                'isEnableProduct': isEnableProduct,
                'deletedProduct': deletedProduct,
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
    deleteCollection({ id, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/{id}',
            path: {
                'id': id,
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
     * @returns void
     * @throws ApiError
     */
    updateCollection({ id, fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/{id}',
            path: {
                'id': id,
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
     * @returns string Ok
     * @throws ApiError
     */
    deleteManyCollection({ id, fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/delete-many-collection',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
            query: {
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
     * @returns void
     * @throws ApiError
     */
    updateStatusesCollection({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/collection-default/status',
            path: {
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
exports.DefaultService = DefaultService;
