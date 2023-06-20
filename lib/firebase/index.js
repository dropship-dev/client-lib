"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInWithGoogle = exports.getUser = exports.isLoggedIn = exports.getToken = exports.auth = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firebaseConfig = {
    apiKey: "AIzaSyBpElHb3KAKM9dxpy5DII0Elsxfg3OHiK8",
    authDomain: "dropship-7dd08.firebaseapp.com",
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
    const result = await (0, auth_1.signInWithPopup)(exports.auth, provider);
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = auth_1.GoogleAuthProvider.credentialFromResult(result);
    if (!credential) {
        throw new Error("No credential");
    }
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    return user;
}
exports.signInWithGoogle = signInWithGoogle;
