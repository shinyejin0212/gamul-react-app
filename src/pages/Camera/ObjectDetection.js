import React, { useEffect, useRef, useState, useCallback } from "react";
import TestOverlay from "../../components/Camera/TestOverlay";
import Webcam from "react-webcam";
import { Button } from "@mui/material";

function ObjectDetection() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    //후면카메라 설정
    facingMode: { exact: "environment" },
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  return (
    <div className="Container" style={{ height: "496px" }}>
      {img === null ? (
        <>
          {/* <TestOverlay /> */}
          <Webcam
            style={{ width: "338px" }}
            imageSmoothing={true}
            screenshotFormat="image/webp"
            ref={webcamRef}
            // videoConstraints={videoConstraints} //후면 카메라 사용
          />
          <div>
            {/* 5초 후 자동으로 찍히게..? */}
            <Button onClick={capture}>Capture photo</Button>
          </div>
        </>
      ) : (
        <>
          <img
            src={img}
            alt="screenshot"
            style={{ width: "338px", height: "auto" }}
          />
          <div>
            <Button onClick={() => setImg(null)}>Retake</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default ObjectDetection;
