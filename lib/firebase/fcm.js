"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messaging = exports.initFirebaseApp = exports.firebaseApp = void 0;
const index_1 = require("./index");
const messaging_1 = require("firebase/messaging");
const app_1 = require("firebase/app");
exports.firebaseApp = (0, app_1.initializeApp)(index_1.firebaseConfig);
function initFirebaseApp() {
    return (0, app_1.initializeApp)(index_1.firebaseConfig);
}
exports.initFirebaseApp = initFirebaseApp;
exports.messaging = (0, messaging_1.getMessaging)(exports.firebaseApp);
