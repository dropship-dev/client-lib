/**
 * Model ProductVariant
 */
export type ProductVariant = {
    updatedAt: string;
    createdAt: string;
    platformVariantId: number;
    productId: number;
    isEnable: boolean;
    isActive: boolean;
    SKU: string;
    compareAtPrice: number;
    photo: string;
    price: number;
    name: string;
    id: number;
};
