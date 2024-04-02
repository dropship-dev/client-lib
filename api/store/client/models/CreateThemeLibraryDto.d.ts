import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { PrismaJson_ThemeStyle } from './PrismaJson_ThemeStyle';
export type CreateThemeLibraryDto = {
    name: NameDto;
    image: PhotoDto;
    style: PrismaJson_ThemeStyle;
};
