import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBytGVFBeVanK0eMpF3uiTxeA9nadymhaM",
  authDomain: "crwn-clothing-6da81.firebaseapp.com",
  projectId: "crwn-clothing-6da81",
  storageBucket: "crwn-clothing-6da81.appspot.com",
  messagingSenderId: "457313614535",
  appId: "1:457313614535:web:af802c53b06ec3092a9ce2",
};

initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, addationalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  //create / set the document with the data from userAuth

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addationalInfo,
      });
    } catch (error) {
      console.log("error crating the user:", error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async function (collectionKey, objectsToAdd) {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());

    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async function () {
  const collectinRef = collection(db, "categories");

  const q = query(collectinRef);

  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce(function (sum, docSnapshot) {
    const { title, items } = docSnapshot.data();

    sum[title.toLowerCase()] = items;

    return sum;
  }, {});

  return categoryMap;

  /*
  
  [
    {
      title: 'hats',
      items: []
    },
    {},
    {},
    {},

  ]

  array

  {
    hats: {},
    sneakers: {},
    mens: {},
    jackets: {},

  }

  hashtable 
  
  */
};
