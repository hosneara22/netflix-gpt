import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    // checkValidData (){
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    //sign in /sign up Logic
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            //add link of photoUrl
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }),
            );
            navigate("/browse");
            // Profile updated!
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://occ-0-6216-3662.1.nflxso.net/dnm/api/v6/x2x1Gn4QgTuVowyvC5vjsETMDK0/AAAABb2fbvPEtWS7p9HaKz--b-4JNgf-T8yjnHwR-HwS83Hk6m6IZh0XbhPbjAdnwfiGDDTX6KVKq1KJ4Wy2gEQd3hrkoMl9YE33HGdpZxv28WO8pT6Ar52OHPwBJw.webp?r=549"
          alt="Background"
        />
      </div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-3"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign UP"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              placeholder=" Full Name"
              className="p-4 my-4 w-ful bg-gray-700"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-ful bg-gray-700"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-ful bg-gray-700"
          />
          <p className="text-red-500 font-bold text-l py-2">{errorMessage}</p>
          <button
            className="p-4 m-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registerd ? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
