import React from "react";
import { fire } from "./firebase/Config";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={()=>{
        fire.auth().createUserWithEmailAndPassword("kiran@gmail.com", "password")
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
           fire.firestore().collection('products').get().then((resp)=>{
          resp.forEach((obj) => {
            console.log(obj.data());
          });
        })
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
       
      }}> CliclMe</button>
    </div>
  );
}

export default App;
