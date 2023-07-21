import type { NameDto } from './NameDto';
export type CreateUploadDto = {
    fileName?: NameDto;
    contentLength: number;
};
