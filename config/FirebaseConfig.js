import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfoOBiiIhzh4SVSHSmUwPSUB5-0_j5Y-I",
  authDomain: "business-directory-app-19d61.firebaseapp.com",
  projectId: "business-directory-app-19d61",
  storageBucket: "business-directory-app-19d61.appspot.com",
  messagingSenderId: "975532874194",
  appId: "1:975532874194:web:416378fbf4cbc57b8ad00b",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
