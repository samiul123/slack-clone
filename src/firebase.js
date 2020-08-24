import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC88cdU_-SIEktH-fOUgSOE6_5wRoIEG1U",
    authDomain: "slack-clone-c4c6b.firebaseapp.com",
    databaseURL: "https://slack-clone-c4c6b.firebaseio.com",
    projectId: "slack-clone-c4c6b",
    storageBucket: "slack-clone-c4c6b.appspot.com",
    messagingSenderId: "849886248768",
    appId: "1:849886248768:web:0cd57dc32b0cd556af04a5",
    measurementId: "G-87TFR4E2L3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db
