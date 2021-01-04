importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey:"",
  authDomain:"",
  projectId:"",
  storageBucket:"",
  messagingSenderId:"",
  appId:"",
  measurementId:""
});
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/logo192.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});


self.addEventListener('notificationclick', event => {
  console.log(event)
  return event;
});