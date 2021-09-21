import firebase from "firebase/app"
import "firebase/auth"

console.log("break21");


const app = firebase.initializeApp({
  apiKey: "AIzaSyBgxnJxjsDc_VUkKvAB_789wx_fI3EUVWU",
  authDomain: "auth-development-81ba7.firebaseapp.com",
  projectId: "auth-development-81ba7",
  storageBucket: "auth-development-81ba7.appspot.com",
  messagingSenderId: "717782170873",
  appId: "1:717782170873:web:1e8fa5ba3c77a5cb7bb628",
  measurementId: "G-L2SDVSRGB8"
})

export const auth = app.auth()
export default app