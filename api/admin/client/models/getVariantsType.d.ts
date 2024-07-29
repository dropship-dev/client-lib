import type { CrossSell } from './CrossSell';
import type { PlatformVariant } from './PlatformVariant';
import type { Product } from './Product';
import type { ProductVariant } from './ProductVariant';
export type getVariantsType = (ProductVariant & {
    Product: (Product & {
        CrossSell: Array<CrossSell>;
        Collection: Array<{
            CrossSell: Array<CrossSell>;
        }>;
    });
    PlatformVariant: PlatformVariant | null;
} & {
    deleted: boolean;
    isStock: boolean;
    type: string;
});
