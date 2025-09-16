import { ClientApi as _ClientApi } from "./client";
export declare const restoreFetch: () => void;
declare class ClientApi extends _ClientApi {
    uploadFile(file: File): Promise<string>;
}
export declare const api: ClientApi;
export * from "./client";
