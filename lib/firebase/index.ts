import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification as _sendEmailVerification,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import {getMessaging} from "firebase/messaging";
import {getToken as deviceToken } from "firebase/messaging";
export {User} from "firebase/auth"

export const firebaseConfig = process.env.NEXT_PUBLIC_FIREBASE_CONFIG
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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function test1234() {
  return "test1234";
}

export async function testConsole() {
  console.log("test");
}

export async function getDeviceToken() {
  const messaging = getMessaging(app);

  const token = await deviceToken(messaging, {
    vapidKey: "BD3e1yzKZEGdi0zUuVNdq_c-MkoYUpwGpgndg0d1FFjQUKStQEiFRd6RXVOlQS0EqQNqGeb4MYgZaGRfbHxzxHQ"
  });
  return token;
}

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
  // The signed-in user info.
  const user = result.user;
  // IdP data available using getAdditionalUserInfo(result)

  return user;
}

export async function signInWithEmailPassword(email: string, password: string) {
  await setPersistence(auth, browserLocalPersistence);
  const result = await signInWithEmailAndPassword(auth, email, password);

  return result.user;
}

export async function signUpWithEmailPassword(email: string, password: string) {
  await setPersistence(auth, browserLocalPersistence);
  const signInMethod = await fetchSignInMethodsForEmail(auth, email);
  console.log(signInMethod);

  const result = await createUserWithEmailAndPassword(auth, email, password);

  await _sendEmailVerification(result.user);
  return result.user;
}

export async function sendEmailVerification() {
  if (!auth.currentUser) {
    throw new Error("No current user");
  }
  await _sendEmailVerification(auth.currentUser);
}

export async function sendEmailPasswordReset(email: string) {
  await sendPasswordResetEmail(auth, email);
}

export async function signOut() {
  await auth.signOut();
}