import { initializeApp } from "firebase/app";
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH3VPnT_sZ3QkeIMNDIaNL0wxctdYRgMA",
  authDomain: "facebook-clone-933a3.firebaseapp.com",
  projectId: "facebook-clone-933a3",
  storageBucket: "facebook-clone-933a3.appspot.com",
  messagingSenderId: "638080385380",
  appId: "1:638080385380:web:62e158ccb753114ef5ba71",
  measurementId: "G-3H6YX3RBG1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
export { provider, auth, signInWithRedirect, getRedirectResult };

export default db;

// Get without snapshot
// const postsCol = collection(db, "posts");
// const postsSnap = await getDocs(postsCol);

// const postsList = postsSnap.docs.map((doc) => ({
//   id: doc.id,
//   ...doc.data(),
// }));
