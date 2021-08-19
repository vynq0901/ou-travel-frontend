import React, { useRef, useState, useEffect } from "react";
import API, { endpoints } from "../../API";

export default function Register() {
  const avatarRef = useRef(null);

  const [user, setUser] = useState({
    last_name: "",
    first_name: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });
  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const dataForm = new FormData();
    for (let k in user) {
      if (k !== "confirm_password") {
        dataForm.append(k, user[k]);
      }
    }
    dataForm.append("avatar", avatarRef.current.files[0]);

    API.post(endpoints["users"], dataForm, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.info(res);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <form className="input-group" id="register" onSubmit={handleRegisterSubmit}>
      <InfoInput
        label="Họ"
        type="text"
        name="last_name"
        placeholder="Họ"
        value={user.last_name}
        onChange={handleChange}
      />
      <InfoInput
        label="Tên"
        type="text"
        name="first_name"
        placeholder="Tên"
        value={user.first_name}
        onChange={handleChange}
      />
      <InfoInput
        label="Email"
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <InfoInput
        label="Tên người dùng"
        type="text"
        name="username"
        placeholder="Tên người dùng"
        value={user.username}
        onChange={handleChange}
      />
      <InfoInput
        label="Mật khẩu"
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={user.password}
        onChange={handleChange}
      />
      <InfoInput
        label="Xác nhận lại mật khẩu"
        type="password"
        name="confirm_password"
        placeholder="Xác nhận mật khẩu"
        value={user.confirm_password}
        onChange={handleChange}
      />
      <div className="user-input">
        <label>Ảnh đại diện</label>
        <input className="input-field" ref={avatarRef} type="file" />
      </div>
      <button className="button">Đăng kí</button>
    </form>
  );
}

function InfoInput({ controlId, type, placeholder, value, name, onChange }) {
  return (
    <div className="user-input">
      <input
        className="input-field"
        id={controlId}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
