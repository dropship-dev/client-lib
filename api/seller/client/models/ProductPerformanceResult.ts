/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductPerformanceResult = ({
  CR: number;
  totalOrder: number;
  checkout: number;
  addToCart: number;
  viewProduct: number;
  AOV: number;
  revenue: number;
  name: string;
  photos: Array<string>;
} & ({
  platformProductId: number;
} | {
  productId: number;
}));

