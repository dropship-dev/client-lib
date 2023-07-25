import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function getToken() {
  if (!auth.currentUser) {
    throw new Error("No current user");
  }
  return await auth.currentUser.getIdToken();
}

export function isLoggedIn() {
  return !!auth.currentUser;
}

export function getUser() {
  return auth.currentUser;
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  const result = await signInWithPopup(auth, provider);
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  if (!credential) {
    throw new Error("No credential");
  }
  const token = credential.accessToken;
  // The signed-in user info.
  const user = result.user;
  // IdP data available using getAdditionalUserInfo(result)

  return user;
}

export async function signOut() {
  await auth.signOut();
}
