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
    createFulfillmentShippingFee({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost',
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
    getAllRegionalShippingFee({ fulfillmentAgencyId, search, startDate, endDate, pageSize = 20, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
            },
            query: {
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
     * @returns string Ok
     * @throws ApiError
     */
    getCountriesExistOnStore({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/get-countries-exist-on-fulfillment',
            path: {
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
     * @returns any Ok
     * @throws ApiError
     */
    getRegionalShippingFee({ fulfillmentAgencyId, id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/{id}',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns any Ok
     * @throws ApiError
     */
    deleteReasonShippingFee({ fulfillmentAgencyId, id, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/{id}',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns any Ok
     * @throws ApiError
     */
    updateReasonShippingFee({ fulfillmentAgencyId, id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/{id}',
            path: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
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
     * @returns string Ok
     * @throws ApiError
     */
    resetSetting({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fulfillmentAgency/{fulfillmentAgencyId}/fulfillment-shipping-cost/reset-setting',
            path: {
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
     * @returns any Ok
     * @throws ApiError
     */
    getSettingPayoutRequest({ fulfillmentAgencyId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/setting/payout-request',
            query: {
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
     * @returns any Ok
     * @throws ApiError
     */
    updateSettingPayoutRequest({ fulfillmentAgencyId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/setting/payout-request',
            query: {
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
