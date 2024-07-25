"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test123 = exports.initFirebaseApp = exports.firebaseApp = void 0;
const index_1 = require("./index");
const app_1 = require("firebase/app");
exports.firebaseApp = (0, app_1.initializeApp)(index_1.firebaseConfig);
async function initFirebaseApp() {
    return (0, app_1.initializeApp)(index_1.firebaseConfig);
}
exports.initFirebaseApp = initFirebaseApp;
async function test123() {
    return "123";
}
exports.test123 = test123;
