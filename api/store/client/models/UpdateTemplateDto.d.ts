export type UpdateTemplateDto = {
    name?: string;
    productTypeId?: number;
    categoryId?: number;
    techniqueId?: number;
    description?: string;
    supplierContact?: string;
    keyFeature?: string;
    sizeGuide?: string;
    isStock?: boolean;
    isActive?: boolean;
    variants?: Array<{
        isActive: boolean;
        faPrice: number;
        supplierCost: number;
        templateVariantId: number;
    }>;
    printArea?: Array<{
        faPrice: number;
        supplierCost: number;
        printAreaId: number;
    }>;
};
