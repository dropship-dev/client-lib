export type CreateVariantDto = {
    name: string;
    price: number;
    supplierPrice: number;
    photo: string;
    variantOption: Array<{
        option: string;
        name: string;
    }>;
};
