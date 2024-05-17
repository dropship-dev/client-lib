import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_ThemeSetting } from './PrismaJson_ThemeSetting';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';
export type UpdateThemeLibraryDto = {
    image?: PhotoDto;
    style?: PrismaJson_ThemeStyle;
    setting?: PrismaJson_ThemeSetting;
};
