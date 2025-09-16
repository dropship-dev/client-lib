import type { NameDto } from './NameDto';
import type { PhotoDto } from './PhotoDto';
import type { URLDto } from './URLDto';
export type UpdateRequestSourcingDto = {
    name?: NameDto;
    description?: string;
    photos?: Array<PhotoDto>;
    link?: URLDto;
};
