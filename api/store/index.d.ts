import { ClientApi as _ClientApi } from "./client";
declare class ClientApi extends _ClientApi {
    uploadFile(file: File): Promise<string>;
}
declare global {
    var isFetchIntercepted: boolean;
}
export declare const api: ClientApi;
export * from "./client";
