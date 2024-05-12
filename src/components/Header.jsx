import React from "react";
import Logo from "../assets/logo-brand.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <div className="bg-white border-b shadow sticky top-0 z-50">
      <header className="flex items-center justify-between px-3 pt-3 pb-1 max-w-6xl mx-auto">
        <div>
          <img
            src={Logo}
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <div>
          <ul className="flex space-x-10 ">
            <li
              className={`py-3  font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMathRoute("/") && "text-blue-900 border-b-blue-400"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`py-3 font-semibold text-gray-400 border-b-[3px]  border-b-transparent cursor-pointer ${
                pathMathRoute("/offers") && "text-blue-900 border-b-blue-400 "
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`py-3  font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
                pathMathRoute("/sign-in") && "text-blue-900 border-b-blue-400"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
