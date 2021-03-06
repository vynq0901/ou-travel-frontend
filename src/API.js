import axios from "axios";

export let endpoints = {
  users: "api/user/",
  auth: "auth/token/",
  tours: "api/tours/",
};

export default axios.create({
  baseURL: "http://127.0.0.1:8000/",
});
