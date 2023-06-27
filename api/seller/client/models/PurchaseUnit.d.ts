import type { Amount } from './Amount';
export type PurchaseUnit = {
    supplementary_data?: {
        card?: {
            level_3?: {
                line_items?: {
                    total_amount?: Amount;
                    discount_amount?: Amount;
                    unit_of_measure?: string;
                    commodity_code?: string;
                    tax?: Amount;
                    unit_amount: Amount;
                    category?: PurchaseUnit.category;
                    sku?: string;
                    description?: string;
                    quantity: string;
                    name: string;
                };
                ships_from_postal_code?: string;
            };
            level_2?: {
                tax_total?: Amount;
                invoice_id?: string;
            };
        };
    };
    shipping?: {
        address?: {
            country_code: string;
            postal_code?: string;
            admin_area_1?: string;
            admin_area_2?: string;
            address_line_2?: string;
            address_line_1?: string;
        };
        name?: {
            surname?: string;
            given_name?: string;
        };
        type?: PurchaseUnit.type;
    };
    payment_instruction?: {
        disbursement_mode?: PurchaseUnit.disbursement_mode;
        payee_receivable_fx_rate_id?: string;
        payee_pricing_tier_id?: string;
        platform_fees?: Array<{
            payee?: {
                merchant_id?: string;
                email_address?: string;
            };
            amount: Amount;
        }>;
    };
    payee?: {
        merchant_id?: string;
        email_address?: string;
    };
    amount: (Amount & {
        breakdown?: {
            discount?: Amount;
            shipping_discount?: Amount;
            insurance?: Amount;
            tax_total?: Amount;
            handling?: Amount;
            shipping?: Amount;
            item_total?: Amount;
        };
    });
    items?: Array<{
        tax?: Amount;
        unit_amount: Amount;
        sku?: string;
        description?: string;
        category?: string;
        quantity: string;
        name: string;
    }>;
    soft_descriptor?: string;
    invoice_id?: string;
    custom_id?: string;
    description?: string;
    reference_id?: string;
};
export declare namespace PurchaseUnit {
    enum category {
        DIGITAL_GOODS = "DIGITAL_GOODS",
        PHYSICAL_GOODS = "PHYSICAL_GOODS",
        DONATION = "DONATION"
    }
    enum type {
        PICKUP_IN_PERSON = "PICKUP_IN_PERSON",
        SHIPPING = "SHIPPING"
    }
    enum disbursement_mode {
        INSTANT = "INSTANT",
        DELAYED = "DELAYED"
    }
}
