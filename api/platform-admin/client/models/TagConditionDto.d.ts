import type { CollectionField_tag } from './CollectionField_tag';
import type { OperatorCollection_EQUAL_TO } from './OperatorCollection_EQUAL_TO';
export type TagConditionDto = {
    field: CollectionField_tag;
    operator: OperatorCollection_EQUAL_TO;
    value: string;
};
