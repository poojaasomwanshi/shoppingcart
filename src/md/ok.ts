<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCxWyZR8uTPVEsQVhyhx0GYPPHPw9wfZ8M",
    authDomain: "ionic-shoppingcart-c31de.firebaseapp.com",
    projectId: "ionic-shoppingcart-c31de",
    storageBucket: "ionic-shoppingcart-c31de.appspot.com",
    messagingSenderId: "1014327595253",
    appId: "1:1014327595253:web:cdf9ada72686cd96ab35bc",
    measurementId: "G-6EBPBXRGKK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>