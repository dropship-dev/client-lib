"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.signUpWithEmailPassword = exports.signInWithEmailPassword = exports.signInWithGoogle = exports.getUser = exports.isLoggedIn = exports.getToken = exports.auth = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firebaseConfig = {
    apiKey: "AIzaSyBpElHb3KAKM9dxpy5DII0Elsxfg3OHiK8",
    authDomain: "auth.bettamax.com",
    projectId: "dropship-7dd08",
    storageBucket: "dropship-7dd08.appspot.com",
    messagingSenderId: "972158312621",
    appId: "1:972158312621:web:32b22d8d4815327db32624",
    measurementId: "G-H2MM3F0CS3",
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.auth = (0, auth_1.getAuth)(app);
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
    try {
        await (0, auth_1.setPersistence)(exports.auth, auth_1.browserLocalPersistence);
        const result = await (0, auth_1.signInWithEmailAndPassword)(exports.auth, email, password);
        return result.user;
    }
    catch (err) {
        throw new Error(`Invalid email or password, ${err.message}`);
    }
}
exports.signInWithEmailPassword = signInWithEmailPassword;
async function signUpWithEmailPassword(email, password) {
    try {
        await (0, auth_1.setPersistence)(exports.auth, auth_1.browserLocalPersistence);
        const result = await (0, auth_1.createUserWithEmailAndPassword)(exports.auth, email, password);
        return result.user;
    }
    catch (err) {
        throw new Error(`Invalid email or password, ${err.message}`);
    }
}
exports.signUpWithEmailPassword = signUpWithEmailPassword;
async function signOut() {
    await exports.auth.signOut();
}
exports.signOut = signOut;
