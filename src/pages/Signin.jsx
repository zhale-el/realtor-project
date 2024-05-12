import React, { useState } from "react";
import signInImage from "../assets/lock.jpg";

const SignIn = () => {
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold text-blue-950  tracking-widest">
        Sign in
      </h1>
      <div className="flex items-center justify-center flex-wrap px-6 py-9 max-w-7xl mx-auto">
        <div className="md:w-[67%] lg:w-[40%] mb-12 md:mb-6">
          <img src={signInImage} alt="sign in" className="w-full" />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="w-full bg-slate-100 shadow-md text-slate-800 p-4 mb-6 border-none outline-none rounded-lg"
              type="email"
              value={emailData}
              onChange={(e) => setEmailData(e.target.value)}
              placeholder="Enter email"
            />
            <input
              className="w-full bg-slate-100 shadow-md text-slate-800 p-4 mb-6 border-none outline-none rounded-lg"
              type="password"
              value={passwordData}
              onChange={(e) => setPasswordData(e.target.value)}
              placeholder="Enter password"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
