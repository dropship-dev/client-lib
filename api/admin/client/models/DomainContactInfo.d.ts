export type DomainContactInfo = {
    zip: string;
    country: string;
    countryCode: string;
    city: string;
    address1: string;
    /**
     * Normal phone number (eg. 012 3456 789, +14 123 456 789)
     */
    phone: string;
    /**
     * Phone number should be specified in the following format: "+cc.llllllll" where cc is the country code and llllllll is the local number (eg. +14.123456789, +1.987123121).
     */
    formattedPhone: string;
    email: string;
    lastName: string;
    firstName: string;
};
