import React from "react";
import WebCam from "../../components/Camera/WebCam";
import Loading from "../../components/Loading.js";

function ObjectDetection() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <WebCam />
      </div>
    </div>
  );
}

export default ObjectDetection;
