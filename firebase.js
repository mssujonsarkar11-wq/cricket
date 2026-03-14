import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-database.js";

const firebaseConfig = {
 apiKey: "AIzaSyD1UHEQxowIlbs8CykLfzyEDVg8Ygj0ZAU",
 authDomain: "cricket-score-c5c9f.firebaseapp.com",
 databaseURL: "https://cricket-score-c5c9f-default-rtdb.firebaseio.com/",
 projectId: "cricket-score-c5c9f",
 storageBucket: "cricket-score-c5c9f.appspot.com",
 messagingSenderId: "5554849346",
 appId: "1:5554849346:web:26d98739b85220fcbfcfdb"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db,ref,set,update,onValue};
