import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCG_7BX7tsfKeRnhqIcrFjH3I_CmDKg0go",
    authDomain: "devops-00.firebaseapp.com",
    databaseURL: "https://devops-00.firebaseio.com",
    projectId: "devops-00",
    storageBucket: "",
    messagingSenderId: "369889809212",
    appId: "1:369889809212:web:3445cfe578837114"
};

firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Alexandra F'
})