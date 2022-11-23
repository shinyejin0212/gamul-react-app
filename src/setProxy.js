const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/v1", {
      target: process.env.REACT_APP_SERVER_PORT,
      changeOrigin: true,
    })
  );
};

import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_PORT,
  headers: {
    "Access-Control-Allow-Origin": true,
  },
});

export default instance;
