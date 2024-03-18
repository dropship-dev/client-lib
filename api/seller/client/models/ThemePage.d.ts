import type { Prisma_JsonValue } from './Prisma_JsonValue';
/**
 * Model ThemePage
 */
export type ThemePage = {
    updatedAt: string;
    createdAt: string;
    themeId: number | null;
    themeLibraryId: number | null;
    content: Prisma_JsonValue;
    name: string;
    id: number;
};
