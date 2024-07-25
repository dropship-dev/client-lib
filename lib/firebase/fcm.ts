import { firebaseConfig } from "./index"
import { getMessaging } from "firebase/messaging";
import { initializeApp} from "firebase/app"

export const firebaseApp = initializeApp(firebaseConfig);
export function initFirebaseApp() {
    return initializeApp(firebaseConfig);
}
export const messaging = getMessaging(firebaseApp);