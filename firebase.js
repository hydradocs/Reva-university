import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqt-_N3qrYgK1kIVd71feFOpM3HGf5Cwc",
    authDomain: "reva-university-sms.firebaseapp.com",
    projectId: "reva-university-sms",
    storageBucket: "reva-university-sms.appspot.com",
    messagingSenderId: "488767540615",
    appId: "1:488767540615:web:d36867a590bfb92dc01722",
    measurementId: "G-L18C1H7SC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);