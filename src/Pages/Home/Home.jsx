import { computeHeadingLevel } from "@testing-library/react";
import React, { useContext, useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import PrimaryButton from "../../component/Button/PrimaryButton";
import Spinner from "../../component/Spinner/Spinner";
import { AuthContext } from "../Context/Context";

import "./Home.css";
const Home = () => {
  const { user, loader } = useContext(AuthContext);
  const email = user?.email;
  const [name, setName] = useState("");
  const [Option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [modaldata, setModalData] = useState(null);

  //  console.log(ContextData);
  const userDataFormHandler = (e) => {
    e.preventDefault();
    const userData = { name, email, message, Option, selectedData };
    setLoading(true);
    if (user?.email) {
      fetch("https://data-entry-backend.vercel.app/userData", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          toast.success("Data Added Successfully");
        })
        .catch((error) => {
          setLoading(false);
        });
    } else {
      toast.error("sir plesh login or singUp");
    }
  };
  const disabledButton = () => {
    toast.error("Sir Please Check and confirm terms and condition");
  };

  // get all data ----
  useEffect(() => {
    setLoading(true);
    fetch("https://data-entry-backend.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="contact">
        <div className="contactRightBar"></div>

        <div className="contactContainer">
          <form className="userDataForm" onSubmit={userDataFormHandler}>
            <h4 className="lg:text-2xl">
              Please enter your name and pick the Sectors you are currently
              involved in.
            </h4>

            <input
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <select
              required
              onChange={(e) => setSelectedData(e.target.value)}
              className="border text-[#747474] border-[#CBCBCB] py-2 my-3"
            >
              {data?.data?.map((ctd) => {
                return (
                  <option>
                    <button>{ctd?.name}</button>
                  </option>
                );
              })}
            </select>
            <select
              required
              onChange={(e) => setOption(e.target.value)}
              className="border text-[#747474] border-[#CBCBCB] py-2 my-3"
            >
              {data?.data?.map((ctd) => {
                return (
                  <option>
                    <button>{ctd.data.map((ct) => ct)}</button>
                  </option>
                );
              })}
            </select>

            <textarea
              placeholder="you are currently involved Sectors details"
              required
              cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Agree to terms</span>
                <input
                  type="checkbox"
                  onChange={(e) => setChecked(!checked)}
                  className="checkbox"
                />
              </label>
            </div>
            {/* <button
              className={`${checked && "bg-[#CBC0FF]"}`}
              disabled={checked}
              type="submit"
            >
              save
            </button> */}

            <PrimaryButton
              type="submit"
              classes="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
            >
              Save
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
