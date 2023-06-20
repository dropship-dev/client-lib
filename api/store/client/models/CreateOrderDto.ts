/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateOrderDto = {
  name: string;
  email: string;
  phone?: string;
  address1: string;
  address2: string;
  city: string;
  province: string;
  zipCode: string;
  country: string;
  note?: string;
  orderItems: Array<{
    quantity: number;
    productVariantId: number;
  }>;
};

