
// import{ firebase} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyD1RvjyDDiT2OxzjSBVapYg2itmC9-KQe4",
    authDomain: "crud-e7441.firebaseapp.com",
    projectId: "crud-e7441",
    storageBucket: "crud-e7441.appspot.com",
    messagingSenderId: "689506498766",
    appId: "1:689506498766:web:2df300659af68a6b8db89f",
    measurementId: "G-2J0FVBR1YD"
    }
;

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; // db ko export karna na bhoolein