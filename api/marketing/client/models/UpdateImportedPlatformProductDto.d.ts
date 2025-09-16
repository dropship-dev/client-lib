export type UpdateImportedPlatformProductDto = {
    platformProductId: number;
    productVariants: Array<{
        price: number;
        id: number;
    }>;
};
