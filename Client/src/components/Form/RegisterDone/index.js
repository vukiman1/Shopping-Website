import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import LoginModal from "../Login/LoginModal";
import { NavLink } from "react-router-dom";

function RegisterDone() {
  const isLogin = useSelector((state) => state.user.login);
  const currentUser = useSelector((state) => state.user.user);
  const currentUserName = currentUser.name;

  return (
    <>
      <div className="register__noti__wrap">
        <p className="register__noti__tittle">
          Xin chào{" "}
          <span className="register__noti__username">{currentUserName}</span>
        </p>
        <NavLink className="register__noti__btn" to="/">
          Đi tới trang chủ
        </NavLink>
      </div>
    </>
  );
}

export default RegisterDone;
