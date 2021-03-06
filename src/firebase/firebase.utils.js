
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAqhcm7dxkR2Fr54Q5hFYXDZj485a1-13s",
  authDomain: "crwn-db-acc58.firebaseapp.com",
  projectId: "crwn-db-acc58",
  storageBucket: "crwn-db-acc58.appspot.com",
  messagingSenderId: "229446551983",
  appId: "1:229446551983:web:28d47aa4ec2d408b83075a",
  measurementId: "G-D02CP3TLKP"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;