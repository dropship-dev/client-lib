/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CollectionDefaultField_price } from './CollectionDefaultField_price';
import type { OperatorCollectionDefault_EQUAL_TO } from './OperatorCollectionDefault_EQUAL_TO';
import type { OperatorCollectionDefault_GREATER_TO } from './OperatorCollectionDefault_GREATER_TO';
import type { OperatorCollectionDefault_LESS_TO } from './OperatorCollectionDefault_LESS_TO';
import type { OperatorCollectionDefault_NOT_EQUAL_TO } from './OperatorCollectionDefault_NOT_EQUAL_TO';
export type PriceConditionCollectionDefaultDto = {
  field: CollectionDefaultField_price;
  operator: (OperatorCollectionDefault_EQUAL_TO | OperatorCollectionDefault_NOT_EQUAL_TO | OperatorCollectionDefault_GREATER_TO | OperatorCollectionDefault_LESS_TO);
  value: number;
};

