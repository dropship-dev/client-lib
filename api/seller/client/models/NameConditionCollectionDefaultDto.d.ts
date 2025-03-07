import type { CollectionDefaultField_name } from './CollectionDefaultField_name';
import type { OperatorCollectionDefault_CONTAIN } from './OperatorCollectionDefault_CONTAIN';
import type { OperatorCollectionDefault_ENDS_WITH } from './OperatorCollectionDefault_ENDS_WITH';
import type { OperatorCollectionDefault_EQUAL_TO } from './OperatorCollectionDefault_EQUAL_TO';
import type { OperatorCollectionDefault_NOT_CONTAIN } from './OperatorCollectionDefault_NOT_CONTAIN';
import type { OperatorCollectionDefault_STARTS_WITH } from './OperatorCollectionDefault_STARTS_WITH';
export type NameConditionCollectionDefaultDto = {
    field: CollectionDefaultField_name;
    operator: (OperatorCollectionDefault_NOT_CONTAIN | OperatorCollectionDefault_EQUAL_TO | OperatorCollectionDefault_STARTS_WITH | OperatorCollectionDefault_ENDS_WITH | OperatorCollectionDefault_CONTAIN);
    value: string;
};
