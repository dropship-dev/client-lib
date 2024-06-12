import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';
/**
 * Model ThemeLibrary
 */
export type ThemeLibrary = {
    updatedAt: string;
    createdAt: string;
    /**
     * [ThemeSetting]
     */
    setting: PrismaJson_ThemeSetting | null;
    /**
     * [ThemeStyle]
     */
    style: PrismaJson_ThemeStyle | null;
    image: string | null;
    name: string;
    id: number;
};
