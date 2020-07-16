import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBULU0wm-RfSuEEgIoLnDNh4CTe-608XnM",
    authDomain: "allvento.firebaseapp.com",
    databaseURL: "https://allvento.firebaseio.com",
    projectId: "allvento",
    storageBucket: "allvento.appspot.com",
    messagingSenderId: "64364080062",
    appId: "1:64364080062:web:8575abbef95955df7427ef",
    measurementId: "G-D689NFBPE5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();