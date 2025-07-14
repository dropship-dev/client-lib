export type GetAllTemplateResponse = {
    isFavorite?: boolean;
    variantOption: Array<{
        total: number;
        name: string;
    }>;
    file: string;
    isActive: boolean;
    minSellingPrice: number;
    description: string | null;
    podTechniqueId: number;
    podCategoryId: number;
    podProductTypeId: number;
    name: string;
    id: number;
};
