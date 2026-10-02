import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
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
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-3">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign UP"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder=" Full Name"
              className="p-4 my-4 w-ful bg-gray-700"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-ful bg-gray-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 m-6 bg-red-700 w-full rounded-lg">
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
