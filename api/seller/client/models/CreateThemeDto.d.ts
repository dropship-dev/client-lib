import type { Colors } from './Colors';
import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { Typos } from './Typos';
export type CreateThemeDto = {
    name: NameDto;
    icon: PhotoDto;
    logo: PhotoDto;
    coverImage: PhotoDto;
    typos: Typos;
    colors: Colors;
    themeTemplateId: number;
};
