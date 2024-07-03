"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodTechniqueService = void 0;
class PodTechniqueService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns PodTechnique Ok
     * @throws ApiError
     */
    createTechnique({ requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/pod/technique',
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
    getListTechnique() {
        return this.httpRequest.request({
            method: 'GET',
            url: '/pod/technique',
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
exports.PodTechniqueService = PodTechniqueService;
