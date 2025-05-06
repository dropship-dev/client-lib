import type { _36_Enums_StoreLogType } from './_36_Enums_StoreLogType';
import type { Record_string_any_ } from './Record_string_any_';
export type CreateLogDto = {
    type: _36_Enums_StoreLogType;
    message: string;
    data: Record_string_any_;
};
