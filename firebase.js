import * as firebase from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
const app = firebase.initializeApp({
    apiKey: 'AIzaSyCTj5xBL7XCQ7D5Gp5T03gnFI2egLuzknY',
    authDomain: 'clothing-app-b7613.firebaseapp.com',
    databaseURL: 'https://clothing-app-b7613-default-rtdb.firebaseio.com',
    projectId: 'clothing-app-b7613',
    storageBucket: 'clothing-app-b7613.appspot.com',
    messagingSenderId: '280253514387',
    appId: '1:280253514387:web:f915b4c7815e46faff4366',
    measurementId: 'G-H3EK0D7P71',
});

export const db = getFirestore(app);

// firebase.initializeApp(firebaseConfig);
// firebase.firestore();

// export default firebase;
