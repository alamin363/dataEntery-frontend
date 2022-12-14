import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../../component/Spinner/Spinner";
import { AuthContext } from "../Context/Context";
import Modal from "./Modal";
import "./MyDAta.css";
const MyData = () => {
  const { user, loader } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [Option, setOption] = useState("");
  const email = user?.email;
  const [selectedData, setUpdatedData] = useState({});
  const [loading, setLoading] = useState(false);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["email"],
    queryFn: () =>
      fetch(`https://data-entry-backend.vercel.app?email=${email}`).then(
        (res) => res.json()
      ),
  });

  const userDataFormHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const updatedDoc = { name, selectedData, Option, message, email };
    fetch("https://data-entry-backend.vercel.app/UserData", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedDoc),
    })
      .then((res) => {
        toast("Updated Successfully");
        setLoading(false);
        refetch();
      })
      .catch((err) => {
        toast.error("Data Updated Failed");
        setLoading(false);
      });
  };
  if (isLoading || loader || loading) {
    return <Spinner />;
  }
  return (
    <div className="bg-gray-500">
      <div className="border h-80 relative grid place-content-center border-[#4285F4]">
        <div className="text-[#F000B8] h- absolute flex border animation  border-[hsl(250, 100%, 75%)] flex-col flex-r gap-6">
          <h2>Your Email: {data?.data[0]?.name}</h2>
          <h2>Your Email: {data?.data[0]?.email}</h2>
          <h2>Your working Sectors: {data?.data[0]?.selectedData}</h2>
          <h2>Your working Category: {data?.data[0]?.Option}</h2>
          <h2>about working message: {data?.data[0]?.message}</h2>
          <label htmlFor="my-modal-3" className="btn">
            UpDate Your Data
          </label>
        </div>
      </div>

      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
      <Modal
        data={data}
        userDataFormHandler={userDataFormHandler}
        setName={setName}
        setMessage={setMessage}
        setOption={setOption}
        setUpdatedData={setUpdatedData}
      />
    </div>
  );
};

export default MyData;
