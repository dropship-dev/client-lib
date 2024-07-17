import type { CollectionField_price } from './CollectionField_price';
import type { OperatorCollection_EQUAL_TO } from './OperatorCollection_EQUAL_TO';
import type { OperatorCollection_GREATER_TO } from './OperatorCollection_GREATER_TO';
import type { OperatorCollection_LESS_TO } from './OperatorCollection_LESS_TO';
import type { OperatorCollection_NOT_EQUAL_TO } from './OperatorCollection_NOT_EQUAL_TO';
export type PriceConditionDto = {
    field: CollectionField_price;
    operator: (OperatorCollection_EQUAL_TO | OperatorCollection_NOT_EQUAL_TO | OperatorCollection_GREATER_TO | OperatorCollection_LESS_TO);
    value: number;
};
