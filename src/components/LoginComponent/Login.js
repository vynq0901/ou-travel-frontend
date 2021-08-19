import React from "react";

export default function Login() {
  return (
    <form className="input-group" id="login">
      <InfoInput
        label="Email"
        type="email"
        controlId="myEmail"
        placeholder="Email"
      />
      <InfoInput
        label="Mật khẩu"
        type="password"
        controlId="myPassword"
        placeholder="Mật khẩu"
      />
      <button className="button">Đăng nhập</button>
    </form>
  );
}

function InfoInput({ label, controlId, type, placeholder }) {
  return (
    <div className="user-input">
      <input
        className="input-field"
        id={controlId}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
