import type { ImportPlatformVariantDto } from './ImportPlatformVariantDto';
import type { PhotoDto } from './PhotoDto';
import type { VariantOptions } from './VariantOptions';
export type ImportPlatformProductDto = {
    quoteId: number;
    name: string;
    sku: string;
    description?: string;
    images: Array<PhotoDto>;
    variantOptions: VariantOptions;
    productVariants: Array<ImportPlatformVariantDto>;
};
