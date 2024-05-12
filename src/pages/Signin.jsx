import React from "react";
import signInImage from "../assets/signin.png";

const SignIn = () => {
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold text-blue-950  tracking-widest">
        Sign in
      </h1>
      <div>
        <div>
          <img src={signInImage} alt="sign in" className="w-96" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default SignIn;
