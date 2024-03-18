import type { EmailDto } from './EmailDto';
export type ContactFormDto = {
    name?: string;
    email: EmailDto;
    subject: string;
    message: string;
    sendCopy: boolean;
};
