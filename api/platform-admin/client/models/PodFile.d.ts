import type { FileType } from './FileType';
import type { Prisma_JsonValue } from './Prisma_JsonValue';
import type { PrismaJson_PodFileProperties } from './PrismaJson_PodFileProperties';
/**
 * Model PodFile
 */
export type PodFile = {
    updatedAt: string;
    createdAt: string;
    /**
     * [PodFileProperties]
     */
    properties: PrismaJson_PodFileProperties | null;
    podDesignId: number | null;
    podPrintAreaId: number | null;
    podTemplateId: number | null;
    layers: Prisma_JsonValue | null;
    size: string | null;
    file: string | null;
    type: FileType;
    id: number;
};
