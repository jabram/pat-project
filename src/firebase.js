import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: "848448552396",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-T76EKS9CG6",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage();

export const getMainContent = async () => {
  const outline = await getDocs(collection(db, "main-content")).then(
    (querySnapshot) => {
      const contentObj = {};
      querySnapshot.docs.map((doc) => (contentObj[doc.id] = { ...doc.data() }));
      return contentObj;
    }
  );
  return outline;
};

export const downloadStorageFile = async (gsUri) => {
  return await getDownloadURL(ref(storage, gsUri))
    .then((url) => {
      return fetch(url).then((res) => res.text());
    })
    .catch((error) => {
      console.error("getDownloadURL error:", error);
    });
};
