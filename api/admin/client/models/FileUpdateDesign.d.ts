import type { _36_Enums_FileType } from './_36_Enums_FileType';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
export type FileUpdateDesign = {
    properties?: PrismaJson_PodFileProperties;
    podPrintAreaId?: number;
    type: _36_Enums_FileType;
    backgroundUrl?: string;
    url?: string;
    fileName?: string;
    id?: number;
};
