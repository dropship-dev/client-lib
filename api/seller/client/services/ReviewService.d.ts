import type { CreateReviewDto } from '../models/CreateReviewDto';
import type { PrismaJson_Photos } from '../models/PrismaJson_Photos';
import type { UpdateReviewDto } from '../models/UpdateReviewDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export declare class ReviewService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * @returns any Ok
     * @throws ApiError
     */
    createReview({ storeId, productId, requestBody, }: {
        storeId: string;
        productId: number;
        requestBody: CreateReviewDto;
    }): CancelablePromise<{
        comment: string;
        rating: number;
        productId: number;
        photos: PrismaJson_Photos;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getAllReview({ storeId, productId, }: {
        storeId: string;
        productId: number;
    }): CancelablePromise<Array<{
        comment: string;
        rating: number;
        productId: number;
        photos: PrismaJson_Photos;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    getReview({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<{
        comment: string;
        rating: number;
        productId: number;
        photos: PrismaJson_Photos;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    updateReview({ storeId, productId, id, requestBody, }: {
        storeId: string;
        productId: number;
        id: number;
        requestBody: UpdateReviewDto;
    }): CancelablePromise<{
        comment: string;
        rating: number;
        productId: number;
        photos: PrismaJson_Photos;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
    /**
     * @returns any Ok
     * @throws ApiError
     */
    deleteReview({ storeId, productId, id, }: {
        storeId: string;
        productId: number;
        id: number;
    }): CancelablePromise<{
        comment: string;
        rating: number;
        productId: number;
        photos: PrismaJson_Photos;
        email: string;
        name: string;
        updatedAt: string;
        createdAt: string;
        id: number;
    }>;
}
