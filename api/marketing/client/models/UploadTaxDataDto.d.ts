import type { NameDto } from './NameDto';
export type UploadTaxDataDto = {
    fileName: NameDto;
    contentLength: number;
    token: string;
    groupId: string;
};
