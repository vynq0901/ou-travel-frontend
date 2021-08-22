import React, {useState, useEffect} from "react";
import InfoInput from "../InfoInput/InfoInput";
import axios from "axios";
import API, { endpoints } from "../../API";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";

export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["usertoken"]);
  let history = useHistory();

  useEffect(() => {
    if (token['usertoken']) {
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
        setToken('usertoken', res.data.token)
        
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
      <button className="button" onClick={handleLoginSubmit}>Đăng nhập</button>
    </form>
  );
}


