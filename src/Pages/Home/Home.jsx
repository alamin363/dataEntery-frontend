import React, { useState } from "react";
import SmallSpinner from "../../component/Spinner/SmallSpinner";
import "./Home.css";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);
  const [chacked, setChacked] = useState(false);
  const userDataFormHandler = (e) => {
    e.preventDefault();
  };
  const disabledButton = () => {
    alert("plezz acet")
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
            <select className="border text-[#747474] border-[#CBCBCB] py-2">
              <option disabled selected>
                Pick one
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
            <textarea
              placeholder="Message"
              required
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Agree to terms</span>
                <input
                  type="checkbox"
                  onChange={(e) => setChacked(e.target.value)}
                  className="checkbox"
                />
              </label>
            </div>
            <button
              className={`${chacked} && bg-[#CBC0FF]`}
              disabled={chacked}
              onClick={disabledButton}
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
