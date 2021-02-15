import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyATWVcwrOgolePNbSu3-_q7fuHbayF_XxA",
    authDomain: "realtime-next-blog.firebaseapp.com",
    projectId: "realtime-next-blog",
    storageBucket: "realtime-next-blog.appspot.com",
    messagingSenderId: "956088425904",
    appId: "1:956088425904:web:b8af1e07dff7e52226ca75"
};
// Initialize Firebase only once
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()