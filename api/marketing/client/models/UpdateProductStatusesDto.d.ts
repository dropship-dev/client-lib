import type { UpdateProductStatusDto } from './UpdateProductStatusDto';
export type UpdateProductStatusesDto = (UpdateProductStatusDto & {
    ids: Array<number>;
});
