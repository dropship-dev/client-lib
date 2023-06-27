export type Payer = {
    address?: {
        country_code: string;
        postal_code?: string;
        admin_area_1?: string;
        admin_area_2?: string;
        address_line_2?: string;
        address_line_1?: string;
    };
    tax_info?: {
        tax_id_type: Payer.tax_id_type;
        tax_id: string;
    };
    birth_date?: string;
    phone?: {
        phone_number: {
            national_number: string;
        };
        phone_type?: Payer.phone_type;
    };
    name?: {
        surname?: string;
        given_name?: string;
    };
    email_address?: string;
};
export declare namespace Payer {
    enum tax_id_type {
        BR_CPF = "BR_CPF",
        BR_CNPJ = "BR_CNPJ"
    }
    enum phone_type {
        MOBILE = "MOBILE",
        HOME = "HOME",
        FAX = "FAX",
        OTHER = "OTHER",
        PAGER = "PAGER"
    }
}
