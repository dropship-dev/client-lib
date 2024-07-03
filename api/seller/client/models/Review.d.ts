import type { PrismaJson_Photos } from './PrismaJson_Photos';
/**
 * Model Review
 */
export type Review = {
    updatedAt: string;
    createdAt: string;
    productId: number;
    /**
     * [Photos]
     */
    photos: PrismaJson_Photos;
    comment: string;
    rating: number;
    email: string | null;
    name: string | null;
    id: number;
};
