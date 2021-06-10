import firebase from "firebase/app";
import "firebase/auth";


export const app = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storeBucket: process.env.STORAGE_BUCKET,
  messagingSendId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID
});
