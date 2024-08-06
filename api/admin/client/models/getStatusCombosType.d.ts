import type { VariantCombo } from './VariantCombo';
export type getStatusCombosType = (VariantCombo & {
    deleted: boolean;
    isStock: boolean;
    Product: {
        platformProductId: number | null;
        name: string;
    };
    type: string;
});
