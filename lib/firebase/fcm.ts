import { firebaseConfig } from "./index"
import { initializeApp} from "firebase/app"

export const firebaseApp = initializeApp(firebaseConfig);
export async function initFirebaseApp() {
    return initializeApp(firebaseConfig);
}

export async function test123() {
    return "123"
}
