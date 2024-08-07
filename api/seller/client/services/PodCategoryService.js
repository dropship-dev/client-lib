"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodCategoryService = void 0;
class PodCategoryService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getListCategory({ fulfillmentAgencyId, storeId, search, startDate, endDate, layout, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/category',
            query: {
                'fulfillmentAgencyId': fulfillmentAgencyId,
                'storeId': storeId,
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
                'layout': layout,
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
exports.PodCategoryService = PodCategoryService;
