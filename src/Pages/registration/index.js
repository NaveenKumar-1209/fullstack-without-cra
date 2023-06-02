import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { registration } from "../../redux/action";
import { redirect } from "react-router-dom";

const Registration = () => {
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const registrationHandler = (e) => {
    // console.log("Registration E", e);
    e.preventDefault();
    const { name, email, password } = field;
    const payload = {
      name,
      email,
      password,
    };
    dispatch(registration(payload));
    redirect("/");
  };
  return (
    <div className="registration-root">
      <form className="form-submit" onSubmit={registrationHandler}>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={field.name}
          onChange={handleInputChange}
        ></input>
        <input
          className="form-input"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={field.email}
          onChange={handleInputChange}
        ></input>
        <input
          className="form-input"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={field.password}
          onChange={handleInputChange}
        ></input>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
