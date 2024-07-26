"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.sendEmailPasswordReset = exports.sendEmailVerification = exports.signUpWithEmailPassword = exports.signInWithEmailPassword = exports.signInWithGoogle = exports.getUser = exports.isLoggedIn = exports.getToken = exports.getDeviceToken = exports.getFirebaseMessage = exports.auth = exports.app = exports.firebaseConfig = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const messaging_1 = require("firebase/messaging");
const messaging_2 = require("firebase/messaging");
exports.firebaseConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG
    ? JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
    : {
        apiKey: "AIzaSyDHbh2RvCg-Mr3S-LZzQzNr5AsjP79MVDQ",
        authDomain: "auth.bettamax.com",
        projectId: "bettamax-prod",
        storageBucket: "bettamax-prod.appspot.com",
        messagingSenderId: "612092513795",
        appId: "1:612092513795:web:e1af974cd13f5865e44836",
        measurementId: "G-T5WCJD16F1",
        vapid: "BD3e1yzKZEGdi0zUuVNdq_c-MkoYUpwGpgndg0d1FFjQUKStQEiFRd6RXVOlQS0EqQNqGeb4MYgZaGRfbHxzxHQ"
    };
// Initialize Firebase
exports.app = (0, app_1.initializeApp)(exports.firebaseConfig);
exports.auth = (0, auth_1.getAuth)(exports.app);
async function getFirebaseMessage() {
    return (0, messaging_1.getMessaging)(exports.app);
}
exports.getFirebaseMessage = getFirebaseMessage;
async function getDeviceToken() {
    let deviceToken = null;
    try {
        const status = await Notification.requestPermission();
        if (status && status === 'granted') {
            const messaging = (0, messaging_1.getMessaging)(exports.app);
            deviceToken = await (0, messaging_2.getToken)(messaging, {
                vapidKey: exports.firebaseConfig.vapid,
            });
        }
    }
    catch {
        deviceToken = null;
    }
    finally {
        return deviceToken;
    }
}
exports.getDeviceToken = getDeviceToken;
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
