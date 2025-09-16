import { ClientApi as _ClientApi } from "./client";
declare class ClientApi extends _ClientApi {
    uploadFile(file: File): Promise<string>;
}
export declare const api: ClientApi;
export * from "./client";
