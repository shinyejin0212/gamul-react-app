import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_PORT,
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": true,
  },
});

export default instance;
