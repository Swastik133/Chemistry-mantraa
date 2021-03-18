var firebaseConfig = {
    apiKey: "AIzaSyDOMOmTYj77Xzegeux62tOcEMxRovnK6wU",
    authDomain: "contactinfo-f25ab.firebaseapp.com",
    projectId: "contactinfo-f25ab",
    storageBucket: "contactinfo-f25ab.appspot.com",
    messagingSenderId: "435168585427",
    appId: "1:435168585427:web:4b135036a32241e6279626",
    measurementId: "G-JBPVP0W5WR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  let contactInfo = firebase.database().ref("infos");
  
  
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  
  function submitForm(e) {
    e.preventDefault();
  
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#Value").value;
  
    saveContactInfo(name, email, message);
  }
  
  function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      Username: name,
      email: email,
      message: message,
    })
  };

function contactInfoD(){
  document.getElementById("#name").value = "";
  document.getElementById("#name").value = "";
  document.getElementById("#name").value = "";
  saveContactInfo(email, message);
}