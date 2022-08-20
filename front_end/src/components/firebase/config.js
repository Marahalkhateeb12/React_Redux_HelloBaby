import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice";

// import { googleprovider } from "./mediaAuth";

const firebaseConfig = {
  apiKey: "AIzaSyAdvmf_VWMoSQdHCIjeShg2-gBLUybV7IE",
  authDomain: "react-app-3ff6f.firebaseapp.com",
  projectId: "react-app-3ff6f",
  storageBucket: "react-app-3ff6f.appspot.com",
  messagingSenderId: "319577778655",
  appId: "1:319577778655:web:59dad9ecbeb004cefb7c6a",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const provider2 = new FacebookAuthProvider();

export const SignInWithGoogle = () => {
  //const dispatch = useDispatch();

  signInWithPopup(auth, provider)
    .then((res) => {
      //console.log(userData);
       localStorage.setItem("name",res.user.displayName);
       localStorage.setItem("email",res.user.email);
      // console.log("************************");
      // console.log(godata);

        return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};

export const SignInWithFacebook = () => {
  signInWithPopup(auth, provider2)
    .then((res) => {
      console.log(res);
      localStorage.setItem("name", res.user.displayName);
      localStorage.setItem("email", res.user.email);
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
