import React, { useEffect, useRef } from "react";
import API from "../../API";
import Register from "../RegisterComponent/Register";
import Login from "../LoginComponent/Login";
import "./AccountModal.scss";

export default function AccountModal() {
  //form animation
  useEffect(() => {
    const loginForm = document.querySelector("#login");
    const registerForm = document.querySelector("#register");
    const toggle = document.querySelector("#toggle");
    const toggleLogin = document.querySelector(".toggle-btn-login");
    const toggleRegister = document.querySelector(".toggle-btn-register");
    toggleRegister.addEventListener("click", register);
    toggleLogin.addEventListener("click", login);
    function register() {
      loginForm.style.left = "-500px";
      registerForm.style.left = "25px";
      toggle.style.left = "150px";
    }
    function login() {
      loginForm.style.left = "20px";
      registerForm.style.left = "430px";
      toggle.style.left = "0";
    }
    return () => {
      toggleRegister.removeEventListener("click", register);
      toggleLogin.removeEventListener("click", login);
    };
  }, []);

  return (
    <div className="account-modal">
      <div className="input-form">
        <div className="button-box">
          <div id="toggle"></div>
          <button className="toggle-btn toggle-btn-login">Đăng nhập</button>
          <button className="toggle-btn toggle-btn-register">Đăng kí</button>
        </div>
        <Login />
        <Register />
      </div>
    </div>
  );
}
