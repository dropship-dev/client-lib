import type { FileType } from './FileType';
import type { PrismaJson_FileProperties } from './PrismaJson_FileProperties';
/**
 * Model PodFile
 */
export type PodFile = {
    updatedAt: string;
    createdAt: string;
    /**
     * [FileProperties]
     */
    properties: PrismaJson_FileProperties | null;
    podDesignId: number | null;
    podPrintAreaId: number | null;
    podTemplateId: number | null;
    file: string | null;
    type: FileType;
    id: number;
};
