import type { CreateElement } from './CreateElement';
import type { ElementType } from './ElementType';
export type CreateElementDto = {
    name: string;
    type: ElementType;
    order?: number;
    payload: Array<CreateElement>;
};
