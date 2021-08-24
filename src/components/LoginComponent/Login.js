import React, {useState, useEffect} from "react";
import InfoInput from "../InfoInput/InfoInput";
import axios from "axios";
import API, { endpoints } from "../../API";
import {login} from "../../redux/userSlice";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";


export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["user"]);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (token['user']) {
      history.push('/')
    }
  }, [token])

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    
    API.post(
      endpoints["auth"],
      {username: username, password: password}, 
      {headers: {"Content-Type": "application/json"}}
      )
      .then(res => {
        setToken('user', res.data)
        dispatch(login(
          res.data
        ));
    })
  }
  return (
    <form className="input-group" id="login">
      <InfoInput
        label="username"
        type="text"
        controlId="myUsername"
        placeholder="Tên người dùng"
        onChange={e => setUserName(e.target.value)}
      />
      <InfoInput
        label="Mật khẩu"
        type="password"
        controlId="myPassword"
        placeholder="Mật khẩu"
        onChange={e => setPassword(e.target.value)}
      />
      <button className="button" onSubmit={handleLoginSubmit}>Đăng nhập</button>
    </form>
  );
}


