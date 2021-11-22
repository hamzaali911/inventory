import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyC5BXRO-ipobtCGOBFcT2tFyNiM4TzVcQc",
  authDomain: "inventory1-60e0a.firebaseapp.com",
  projectId: "inventory1-60e0a",
  storageBucket: "inventory1-60e0a.appspot.com",
  messagingSenderId: "19368468574",
  appId: "1:19368468574:web:51f5e44d87bd0d3c73d4cf"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db) {
    const citiesCol = collection(db, 'users');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
console.log(getCities(db));