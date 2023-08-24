export declare const auth: import("@firebase/auth").Auth;
export declare function getToken(): Promise<string>;
export declare function isLoggedIn(): boolean;
export declare function getUser(): import("@firebase/auth").User | null;
export declare function signInWithGoogle(): Promise<import("@firebase/auth").User>;
export declare function signInWithEmailPassword(email: string, password: string): Promise<import("@firebase/auth").User>;
export declare function signUpWithEmailPassword(email: string, password: string): Promise<import("@firebase/auth").User>;
export declare function signOut(): Promise<void>;
