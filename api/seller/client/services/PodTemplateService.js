"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodTemplateService = void 0;
class PodTemplateService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllTemplate({ search, sort = 'ASC', status, productTypeId, storeId, fulfillmentAgencyId, isFavorite, page = 1, limit = 10, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/template',
            query: {
                'search': search,
                'sort': sort,
                'status': status,
                'productTypeId': productTypeId,
                'storeId': storeId,
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'isFavorite': isFavorite,
                'page': page,
                'limit': limit,
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
    getDetailTemplate({ id, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/template/{id}',
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
     * @returns any Ok
     * @throws ApiError
     */
    getTemplateVariant({ id, variantIds, designId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/template/{id}/template-variant',
            path: {
                'id': id,
            },
            query: {
                'variantIds': variantIds,
                'designId': designId,
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
     * @returns TemplateFavorite Ok
     * @throws ApiError
     */
    favoriteTemplate({ id, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/template/{id}/favorite',
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
}
exports.PodTemplateService = PodTemplateService;
