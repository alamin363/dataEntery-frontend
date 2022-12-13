import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setloading] = useState(false);
  const userDataFormHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="contact">
        <div className="contactRightBar"></div>

        <div className="contactContainer">
          <form className="userDataForm" onSubmit={userDataFormHandler}>
            <h4 className="lg:text-2xl ">
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
            <select className="border py-3">
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
            <button variant="contained" type="submit" disabled={loading}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
