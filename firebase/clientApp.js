import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { DataSnapshot, getDatabase, onChildAdded, onChildRemoved, ref, set } from 'firebase/database';

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
}

const app = initializeApp(clientCredentials);
export const auth = getAuth();
export const db = getFirestore(app);




// // getting a single item
// const listRef = ref(db, 'users/' + userId + '/list')
// onValue(listRef, (DataSnapshot) => {
//     const data = DataSnapshot.val();
//     updateList(postItem, data);
// })

// // setting an item in a list
// function writeListItem(label, content) {
//     const clipsListRef = ref(db, 'clips/' + itemId);
//     const newClipRef = push(clipsListRef);
//     set(newClipRef, {
//         label: label,
//         content: content,
//     }); 
// }

// // get entire list
// function getList() {
//     const listRef = ref(db, 'users/' + userId + '/list')
//     onValue(listRef, (DataSnapshot) => {
//     DataSnapshot.forEach((childSnapshot) => {
//         const childKey = childSnapshot.key;
//         const childData = childSnapshot.val();
//     });
// }, {
//     onlyOnce: true
// });}

// // listener if new list item is added
// function itemAdded() {
//     const listRef = ref(db, 'users/' + userId + '/list');
//     onChildAdded(listRef, (data) => {
//         writeListItem(data.key, data.val().label, data.val().content);
//     });
// }

// // listener if list item is changed
// function itemChanged() {
//     const listRef = ref(db, 'users/' + userId + '/list');
//     onChildChanged(listRef, (data) => {
//         writeListItem(data.key, data.val().label, data.val().content);
//     });
// }

// // listener for if a list element is deleted
// function deleteItem() {
//     const listRef = ref(db, 'users/' + userId + '/list');
//     onChildRemoved(listRef, (data) => {
//         writeListItem(data.key, data.val().label, data.val().content);
//     });
// }

// // setting data for userId, name, email, and profile picture
// function writeUserData(userId, name, email, imageURL) {
//     const reference = ref(db, 'users/' + userId);

//     set(reference, {
//         username: name,
//         email: email, 
//         profile_picture: imageURL
//     });
// }

// export default writeUserData();