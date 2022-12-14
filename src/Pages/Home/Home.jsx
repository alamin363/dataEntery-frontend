import { computeHeadingLevel } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import SmallSpinner from "../../component/Spinner/SmallSpinner";
import Spinner from "../../component/Spinner/Spinner";
import { ContextData } from "../Context/Context";
import "./Home.css";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedData, setSelectedData] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  //  console.log(ContextData);
  const userDataFormHandler = (e) => {
    e.preventDefault();
  };

  console.log(selectedData);
  const disabledButton = () => {
    toast.error("Sir Please Check and confirm terms and condition");
  };
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/category")
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
                  className="border text-[#747474] border-[#CBCBCB] py-2"
                >
                  {data?.data?.map((ctd) => <option><button>{ctd.name}</button></option>)}
                </select>
            {/* 
            {data?.data?.map((ctd) => (

              <>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">{ctd.name}</span>
                    <input
                      type="checkbox"
                      onChange={() => setChecked(!checked)}
                      className="checkbox"
                    />
                  </label>
                </div>
                <select
                  required
                  onChange={(e) => setSelectedData(e.target.value)}
                  className="border text-[#747474] border-[#CBCBCB] py-2"
                >
                  {ctd.data.map((dt) => (
                    <option>{dt}</option>
                  ))}
                </select>
              </>
            ))}   
            
            */}

            <textarea
              placeholder="Other"
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
            <button
              className={`${checked && "bg-[#CBC0FF]"}`}
              disabled={checked}
              onClick={disabledButton}
              type="submit"
            >
              save
            </button>
          </form>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Home;
