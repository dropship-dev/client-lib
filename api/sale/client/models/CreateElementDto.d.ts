import type { _36_Enums_ElementType } from './_36_Enums_ElementType';
import type { CreateElement } from './CreateElement';
export type CreateElementDto = {
    name: string;
    type: _36_Enums_ElementType;
    order?: number;
    payload: Array<CreateElement>;
};
