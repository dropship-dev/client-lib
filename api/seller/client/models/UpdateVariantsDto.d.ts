import type { UpdateVariantDto } from './UpdateVariantDto';
export type UpdateVariantsDto = Array<(UpdateVariantDto & {
    id: number;
})>;
