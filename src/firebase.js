import { initializeApp } from 'firebase/app';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getJournals = async () => {
  const q = query(collection(db, 'journals'));
  const querySnapshot = await getDocs(q);

  const journals = [];

  querySnapshot.forEach((j) => {
    const journal = j.data();
    journals.push(journal);
  });
  return journals;
};

export default getJournals;
