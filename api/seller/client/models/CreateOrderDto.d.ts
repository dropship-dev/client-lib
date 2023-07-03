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
    payment: {
        method: CreateOrderDto.method;
    };
    orderItems: Array<{
        quantity: number;
        productVariantId: number;
    }>;
};
export declare namespace CreateOrderDto {
    enum method {
        PAYPAL = "paypal"
    }
}
