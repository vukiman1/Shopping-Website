import React, { useRef, useState, useEffect } from "react";
import "./index.scss";
import { useSnackbar } from "notistack";

import { Link, useNavigate } from "react-router-dom";

function LoginForm({ handleCloseModal }) {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorMsg, setErrorMsg] = useState({});
  const [userdata, setUserdata] = useState([]); // Empty array instead of string
  const usernameRef = useRef();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const validateAll = () => {
    const msg = {};
    // Validate email
    if (email.trim() === "") {
      msg.usernameInput = "*Please enter your email";
    }
    // Validate password
    if (passWord.trim() === "") {
      msg.passwordInput = "*Please enter your password";
    }
    setErrorMsg(msg);
    return Object.keys(msg).length === 0; // Correct condition
  };

  useEffect(() => {
    const getUserdata = async () => {
      const response = await fetch(
        "https://66d0185e181d059277dd323b.mockapi.io/api/v1/users"
      );
      if (response.ok) {
        setUserdata(await response.json());
      } else {
        enqueueSnackbar("Failed to fetch user data", { variant: "error" });
      }
    };
    getUserdata();
  }, [enqueueSnackbar]);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const isValidate = validateAll();
    if (isValidate) {
      const existAccount = userdata.find(
        (user) => user.email === email && user.passWord === passWord
      );
      if (existAccount) {
        enqueueSnackbar("Signed in successfully", { variant: "success" });
        navigate("/");
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ user: existAccount, login: true })
        );
        handleCloseModal();
      } else {
        enqueueSnackbar("Invalid email or password. Please try again.", {
          variant: "error",
        });
      }
    }
  };

  return (
    <form className="login__form" onSubmit={handleLoginSubmit}>
      <h3 className="form__title">Login</h3>
      <div className="mg-t">
        <label className="form__label">Email</label> <br />
        <input
          className="form__input"
          ref={usernameRef}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <p className="form__errorMsg">{errorMsg.usernameInput}</p>
      </div>
      <div className="mg-t">
        <label className="form__label">Mật kh</label> <br />
        <input
          className="form__input"
          type="password"
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
          placeholder="Enter your password"
        />
        <p className="form__errorMsg">{errorMsg.passwordInput}</p>
      </div>
      <button type="submit" className="form__submit__btn">
        Login
      </button>
      <div>
        Don't have an account? <Link to="/register">Sign Up</Link>
      </div>
    </form>
  );
}

export default LoginForm;
