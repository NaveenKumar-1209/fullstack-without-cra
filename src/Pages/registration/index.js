import React, { useMemo, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/action";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const profile = useSelector((state) => state.profile);
  const [field, setField] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const getError = useMemo(() => {
    if (profile?.error) {
      return profile?.error;
    } else {
      navigate("/");
      return "";
    }
  }, [profile]);

  const registrationHandler = async (e) => {
    // console.log("Registration E", e);
    e.preventDefault();
    const { name, email, password } = field;
    const payload = {
      name,
      email,
      password,
    };
    await dispatch(registration(payload));
  };
  return (
    <div className="registration-root">
      {getError ? <div>{getError}</div> : null}
      <form className="form-submit" onSubmit={registrationHandler}>
        <input
          className="form-input"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={field.name}
          onChange={handleInputChange}
        />
        <input
          className="form-input"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={field.email}
          onChange={handleInputChange}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Enter your password"
          name="password"
          value={field.password}
          onChange={handleInputChange}
        />
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
