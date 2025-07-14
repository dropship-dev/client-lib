import type { DesignVariant } from './DesignVariant';
import type { DesignVariantOptionsPayLoad } from './DesignVariantOptionsPayLoad';
import type { FileTemplate } from './FileTemplate';
export type PublishToProductDto = {
    podTemplateId: number;
    storeId: string;
    name: string;
    description?: string;
    keyFeature?: string;
    sizeGuide?: string;
    supplierContact?: string;
    sku?: string;
    variantOption: Array<DesignVariantOptionsPayLoad>;
    variants: Array<DesignVariant>;
    files: Array<FileTemplate>;
    isDraft?: boolean;
};
