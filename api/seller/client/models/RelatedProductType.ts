/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrossSellTriggerType } from './CrossSellTriggerType';
import type { NameDto } from './NameDto';
import type { PlacementCrossSellEnum } from './PlacementCrossSellEnum';

export type RelatedProductType = {
  kind: RelatedProductType.kind;
  title: NameDto;
  type: CrossSellTriggerType;
  ids: Array<number>;
  placementList: Array<PlacementCrossSellEnum>;
  timeLife: {
    endDate?: string;
    startDate: string;
  };
};

export namespace RelatedProductType {

  export enum kind {
    RELATED_PRODUCT = 'RelatedProduct',
  }


}

