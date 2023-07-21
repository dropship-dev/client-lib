/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FulfillmentStatus } from './FulfillmentStatus';
import type { PaymentType } from './PaymentType';

export type ExportOrderResponseDto = {
  OrderId: string;
  ItemCode: string;
  SKU: string;
  VariantName: string;
  Domain: string;
  Quantity: number;
  SupplierCost: number;
  ItemStatus: FulfillmentStatus;
  LastUpdatedAt: string;
  PaidAt: string;
  FulfilledAt?: string;
  TrackingNumber?: string;
  Carrier?: string;
  UnitPrice: number;
  ShippingFee: number;
  TotalPrice: number;
  Buyer: {
    ProvinceCode?: string;
    CountryCode: string;
    Zip: string;
    Country: string;
    Province: string;
    City: string;
    Phone?: string;
    Address2?: string;
    Address1: string;
    Email: string;
    Name: string;
  };
  SellerEmail: string;
  PaymentGatewayId: string;
  PaymentGatewayName: string;
  GatewayType: PaymentType;
  TransactionId?: string;
};

