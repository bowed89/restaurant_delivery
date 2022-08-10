import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDII5WOEROSpm9yvKorYbfY7IGbrJWUkTQ",
    authDomain: "restaurantapp-bfad7.firebaseapp.com",
    databaseURL: "https://restaurantapp-bfad7-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-bfad7",
    storageBucket: "restaurantapp-bfad7.appspot.com",
    messagingSenderId: "183423308025",
    appId: "1:183423308025:web:7eb5ec1b11a886c2fc1228"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export {
    app,
    firestore,
    storage
}