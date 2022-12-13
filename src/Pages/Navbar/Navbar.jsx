import React, { useState } from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../component/Button/PrimaryButton";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="text-gray-900 body-font shadow-sm">
      <div className=" mx-auto flex flex-wrap py-5 px-20 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0"
        >
          <span className="ml-3 text-2xl font-bold ">DataEntry</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <>
            <Link to="/login" className="mr-5 hover:text-green-600">
              Login
            </Link>
            <Link to="/signup" className="mr-5">
              <PrimaryButton classes="rounded-full px-2 py-1">
                Signup
              </PrimaryButton>
            </Link>
          </>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
