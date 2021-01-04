# react-firebase-push-notification

#step 1 :- Register Project into firebase

https://firebase.google.com/docs/web/setup

#step 1:- Setup firebase credentials in `src > firebase-messaging.js & public > firebase-messaging-sw.js`

<pre>
<code>var firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://PROJECT_ID.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};</code>
</pre>
