"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodDesignService = void 0;
class PodDesignService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
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
