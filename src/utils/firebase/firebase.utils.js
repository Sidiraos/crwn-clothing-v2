// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBHZ3d03gpt29d5xFXfCRBIkNGenj5jXic',
	authDomain: 'crwn-467e6.firebaseapp.com',
	projectId: 'crwn-467e6',
	storageBucket: 'crwn-467e6.appspot.com',
	messagingSenderId: '706445980990',
	appId: '1:706445980990:web:ee92e68bedff84771e686f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUsersDocumentFromAuth = async (userAuth) => {
	const userDocRef =  doc(db, 'users', userAuth.uid);
	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log('error creating the user', error.message);
		}
	}

  return userDocRef;
};
