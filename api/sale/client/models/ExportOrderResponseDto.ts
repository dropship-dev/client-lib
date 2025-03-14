/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { _36_Enums_FulfillmentStatus } from './_36_Enums_FulfillmentStatus';
import type { _36_Enums_PaymentType } from './_36_Enums_PaymentType';
export type ExportOrderResponseDto = {
  OrderId: string;
  ItemCode: string;
  SKU?: string;
  ProductSKU?: string;
  VariantName?: string;
  Domain: string;
  Quantity: number;
  SupplierCost?: number;
  ItemStatus: _36_Enums_FulfillmentStatus;
  LastUpdatedAt: string;
  PaidAt: string;
  LastUpdatedDateAt: string;
  PaidDateAt: string;
  LastUpdatedTimeAt: string;
  PaidTimeAt: string;
  FulfilledAt?: string;
  TrackingNumber?: string;
  Carrier?: string;
  UnitPrice: number;
  ShippingFee: number;
  TotalPrice: number;
  BuyerName: string;
  BuyerEmail: string;
  BuyerAddress1: string;
  BuyerAddress2?: string;
  BuyerPhone?: string;
  BuyerCity: string;
  BuyerProvince: string;
  BuyerCountry: string;
  BuyerZip: string;
  BuyerCountryCode: string;
  BuyerProvinceCode?: string;
  SellerEmail: string;
  StoreName: string;
  PaymentGatewayId: string;
  PaymentGatewayName: string;
  GatewayType: _36_Enums_PaymentType;
  TransactionId?: string;
};

