import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCqy0GKFJBamiKYLZYsvJZj8O-DBJupMqo",
    authDomain: "crwn-db-c9b2a.firebaseapp.com",
    projectId: "crwn-db-c9b2a",
    storageBucket: "crwn-db-c9b2a.appspot.com",
    messagingSenderId: "646942967107",
    appId: "1:646942967107:web:4f61cba43ff118a7275bf6",
    measurementId: "G-JHDG03J6YN"
  };  

  /* intended to prevent duplicate firebase error */
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

  export const auth = firebase.auth();
  export const firestore = firebase.firestore;

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

  
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    var db = firestore();
    const userRef = db.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) /* If it doesn't exist */
    {
      /* Create a document */
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, email, createdAt, ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
  }