import type { DesignVariant } from './DesignVariant';
import type { FileTemplate } from './FileTemplate';
import type { VariantOptionsPayLoad } from './VariantOptionsPayLoad';
export type PublishToProductDto = {
    podTemplateId: number;
    storeId: string;
    name: string;
    description?: string;
    keyFeature?: string;
    sizeGuide?: string;
    supplierContact?: string;
    sku?: string;
    variantOption: Array<VariantOptionsPayLoad>;
    variants: Array<DesignVariant>;
    files: Array<FileTemplate>;
    isDraft?: boolean;
};
