import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';
/**
 * Model ThemeLibrary
 */
export type ThemeLibrary = {
    updatedAt: string;
    createdAt: string;
    /**
     * [ThemeStyle]
     */
    style: PrismaJson_ThemeStyle;
    image: string | null;
    name: string;
    id: number;
};
