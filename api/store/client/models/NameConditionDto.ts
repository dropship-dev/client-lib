/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CollectionField_name } from './CollectionField_name';
import type { OperatorCollection_CONTAIN } from './OperatorCollection_CONTAIN';
import type { OperatorCollection_ENDS_WITH } from './OperatorCollection_ENDS_WITH';
import type { OperatorCollection_EQUAL_TO } from './OperatorCollection_EQUAL_TO';
import type { OperatorCollection_NOT_CONTAIN } from './OperatorCollection_NOT_CONTAIN';
import type { OperatorCollection_STARTS_WITH } from './OperatorCollection_STARTS_WITH';

export type NameConditionDto = {
  field: CollectionField_name;
  operator: (OperatorCollection_NOT_CONTAIN | OperatorCollection_EQUAL_TO | OperatorCollection_STARTS_WITH | OperatorCollection_ENDS_WITH | OperatorCollection_CONTAIN);
  value: string;
};

