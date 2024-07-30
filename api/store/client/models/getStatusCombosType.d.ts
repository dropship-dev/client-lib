import type { VariantCombo } from './VariantCombo';
export type getStatusCombosType = (VariantCombo & {
    deleted: boolean;
    isStock: boolean;
    Product: {
        name: string;
    };
    type: string;
});
