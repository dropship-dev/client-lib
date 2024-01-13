"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignService = void 0;
class CampaignService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * @returns string Ok
     * @throws ApiError
     */
    deleteDiscount({ storeId, campaignId, discountId, productIds, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/campaign/{campaignId}/discount/{discountId}',
            path: {
                'storeId': storeId,
                'campaignId': campaignId,
                'discountId': discountId,
            },
            query: {
                'productIds': productIds,
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
    deleteManyDiscount({ storeId, campaignId, discountId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/campaign/{campaignId}/discount',
            path: {
                'storeId': storeId,
                'campaignId': campaignId,
            },
            query: {
                'discountId': discountId,
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
    createManyDiscount({ storeId, campaignId, requestBody, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/store/{storeId}/campaign/{campaignId}/discount',
            path: {
                'storeId': storeId,
                'campaignId': campaignId,
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
    updateManyDiscount({ storeId, campaignId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/campaign/{campaignId}/discount',
            path: {
                'storeId': storeId,
                'campaignId': campaignId,
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
    updateCampaign({ storeId, campaignId, requestBody, }) {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/store/{storeId}/campaign/{campaignId}',
            path: {
                'storeId': storeId,
                'campaignId': campaignId,
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
    getCampaignById({ storeId, campaignId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/store/{storeId}/campaign/{campaignId}',
            path: {
                'storeId': storeId,
                'campaignId': campaignId,
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
    deleteCampaign({ storeId, campaignId, productId, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/store/{storeId}/product/{productId}/campaign/{campaignId}',
            path: {
                'storeId': storeId,
                'campaignId': campaignId,
                'productId': productId,
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
exports.CampaignService = CampaignService;
