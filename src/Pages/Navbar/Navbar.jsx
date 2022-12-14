import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import PrimaryButton from "../../component/Button/PrimaryButton";
import { AuthContext } from "../Context/Context";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  console.log(user?.email);
  const handelLogout = () => {
    LogOut()
      .then((res) => toast.success("LogOut successfully"))
      .catch((err) => toast.error("Logout Failed"));
  };
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

          {user?.email ? (
            <>
              <button
                className=" px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
                onClick={handelLogout}
              >
                LogOut
              </button>
              <Link className="ml-5 hover:text-green-600" to="/mydata">
                MyData
              </Link>
            </>
          ) : (
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
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
