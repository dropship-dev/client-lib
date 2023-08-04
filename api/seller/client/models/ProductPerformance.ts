/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ProductPerformance = ({
  CR: number;
  totalOrder: number;
  checkout: number;
  addToCard: number;
  viewProduct: number;
  AOV: number;
  revenue: number;
  name: string;
} & ({
  platformProductId: number;
} | {
  productId: number;
}));

