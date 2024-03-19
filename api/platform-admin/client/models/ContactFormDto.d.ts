import type { EmailDto } from './EmailDto';
export type ContactFormDto = {
    domain: string;
    name?: string;
    email: EmailDto;
    subject: string;
    message: string;
    sendCopy: boolean;
};
