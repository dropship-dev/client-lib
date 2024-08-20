"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodDesignService = void 0;
class PodDesignService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns PodDesign Ok
     * @throws ApiError
     */
    createNewDesign({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/design',
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
    getAllDesign({ storeId, limit = 10, name, printArea, nextPageIndex, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/design',
            query: {
                'storeId': storeId,
                'limit': limit,
                'name': name,
                'printArea': printArea,
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
     * @returns BatchPayload Ok
     * @throws ApiError
     */
    deleteMyDesign({ requestBody, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/pod/design',
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
    duplicateDesign({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/design/duplicate',
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
     * @returns Product Ok
     * @throws ApiError
     */
    publishToProduct({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/design/publish-to-store',
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
    multiplePublishToProduct({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/design/multiple-publish-to-store',
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
    detailMyDesign({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/design/{id}',
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
    /**
     * @returns PodDesign Ok
     * @throws ApiError
     */
    updateMyDesign({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/pod/design/{id}',
            path: {
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
    getPrintAreaByStore({ storeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/design/{storeId}/print-area',
            path: {
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
}
exports.PodDesignService = PodDesignService;
