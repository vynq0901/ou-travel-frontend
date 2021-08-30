import React, { useState, useEffect } from "react";
import InfoInput from "../InfoInput/InfoInput";
import API, { endpoints } from "../../API";
import { login } from "../../redux/userSlice";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";


export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies();
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (token['access_token']) {
      history.push('/')
    }
  }, [token])

  const handleLoginSubmit = async event => {
    event.preventDefault();

    const data = {
      'username': username,
      'password': password,
      'client_id': 'MxHPOjOBQkhwj4S4NnIdTsMm0Ge2Utova6ppvN9M',
      'client_secret': 'MIrxJE8X1tJm8pSveIOlUc7nBjvV6eEiY4dEfn0xEoehJqqdeiOxWD77fObpp7Iysp0467AE9S8G0ux5TojPERrUKsH9Y94Cx4r6u21ohmcg6F71dfMEw8SzlQ0Q2j1X',
      'grant_type': 'password'
    }
    API.post(endpoints["auth"], data, { headers: { 'Content-type': 'application/json' } })
      .then(res => {
        setToken('access_token', res.data.access_token)
        dispatch(login(res.data.current_user))
      })
  }

  return (
    <form className="input-group" id="login" onSubmit={handleLoginSubmit}>
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
      <button type="submit" className="button">Đăng nhập</button>
    </form>
  );
}


