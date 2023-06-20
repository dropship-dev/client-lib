export type CreateVariantDto = {
    name: string;
    price: number;
    photo: string;
    variantOption: Array<{
        option: string;
        name: string;
    }>;
};
