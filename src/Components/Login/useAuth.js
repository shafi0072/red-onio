import React, { useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState, createContext } from "react";

firebase.initializeApp(firebaseConfig);

// creating context

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}

const getUser = user => {
  const { displayName, email, photoURL } = user;
      return { name: displayName, email, photo: photoURL };
}


const Auth = () => {
  const [user, setUser] = useState(null);



//On state changed
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user){
      if(user){

        const currentUser = getUser(user);
        setUser(currentUser);
        
      }else{
        //NO user signed in
      }
    });
  }, [])



  //signInWithGoogle

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        const signedInUser = getUser(res.user);
        setUser(signedInUser);
        return res.user;
      })
      .catch(err => {
        console.log(err);
        setUser(null);
        return err.message;
      });
  };

  // create account with email and password

  const signUp = (email, password) => {
    
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      
      console.log(res);
      // const signInUser = getUser(res.user);
      // setUser(signInUser);
      })
    .catch(error=>{
      // setUser(null)
     console.log(error);

    
    })
    
    
  }



  // sign in  existing users
  const signIn = (email,password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res =>{
    setUser(res.user);
    console.log(res.user);
  })
  .catch(error=> {
    // Handle Errors here.
    //const errorCode = error.code;
    const errorMessage = error.message;
    setUser({error:errorMessage})
    
    // ...
  })
}






  //sign out function

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function() {
        setUser(null);
      })
      .catch(function(error) {});
  };
 
 




   



  return {
    user,
    signUp,
    signInWithGoogle,
    signIn,
    signOut
  };
};

export default Auth;
