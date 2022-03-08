import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREABSE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREABSE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREABSE_PROJECT_ID
};


firebase.initializeApp(firebaseConfig)


export default firebase