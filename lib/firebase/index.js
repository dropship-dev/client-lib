"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.sendEmailPasswordReset = exports.sendEmailVerification = exports.signUpWithEmailPassword = exports.signInWithEmailPassword = exports.signInWithGoogle = exports.getUser = exports.isLoggedIn = exports.getToken = exports.initFirebaseApp = exports.auth = exports.app = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
__exportStar(require("firebase/auth"), exports);
const firebaseConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG
    ? JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
    : {
        apiKey: "AIzaSyDHbh2RvCg-Mr3S-LZzQzNr5AsjP79MVDQ",
        authDomain: "auth.bettamax.com",
        projectId: "bettamax-prod",
        storageBucket: "bettamax-prod.appspot.com",
        messagingSenderId: "612092513795",
        appId: "1:612092513795:web:e1af974cd13f5865e44836",
        measurementId: "G-T5WCJD16F1",
    };
// Initialize Firebase
exports.app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(exports.app);
function initFirebaseApp() {
    (0, app_1.initializeApp)(firebaseConfig);
}
exports.initFirebaseApp = initFirebaseApp;
async function getToken() {
    if (!exports.auth.currentUser) {
        throw new Error("No current user");
    }
    return await exports.auth.currentUser.getIdToken();
}
exports.getToken = getToken;
function isLoggedIn() {
    return !!exports.auth.currentUser;
}
exports.isLoggedIn = isLoggedIn;
function getUser() {
    return exports.auth.currentUser;
}
exports.getUser = getUser;
async function signInWithGoogle() {
    const provider = new auth_1.GoogleAuthProvider();
    provider.setCustomParameters({
        prompt: "select_account",
    });
    const result = await (0, auth_1.signInWithPopup)(exports.auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = auth_1.GoogleAuthProvider.credentialFromResult(result);
    if (!credential) {
        throw new Error("No credential");
    }
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    return user;
}
exports.signInWithGoogle = signInWithGoogle;
async function signInWithEmailPassword(email, password) {
    await (0, auth_1.setPersistence)(exports.auth, auth_1.browserLocalPersistence);
    const result = await (0, auth_1.signInWithEmailAndPassword)(exports.auth, email, password);
    return result.user;
}
exports.signInWithEmailPassword = signInWithEmailPassword;
async function signUpWithEmailPassword(email, password) {
    await (0, auth_1.setPersistence)(exports.auth, auth_1.browserLocalPersistence);
    const signInMethod = await (0, auth_1.fetchSignInMethodsForEmail)(exports.auth, email);
    console.log(signInMethod);
    const result = await (0, auth_1.createUserWithEmailAndPassword)(exports.auth, email, password);
    await (0, auth_1.sendEmailVerification)(result.user);
    return result.user;
}
exports.signUpWithEmailPassword = signUpWithEmailPassword;
async function sendEmailVerification() {
    if (!exports.auth.currentUser) {
        throw new Error("No current user");
    }
    await (0, auth_1.sendEmailVerification)(exports.auth.currentUser);
}
exports.sendEmailVerification = sendEmailVerification;
async function sendEmailPasswordReset(email) {
    await (0, auth_1.sendPasswordResetEmail)(exports.auth, email);
}
exports.sendEmailPasswordReset = sendEmailPasswordReset;
async function signOut() {
    await exports.auth.signOut();
}
exports.signOut = signOut;
