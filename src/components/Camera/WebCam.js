import React, { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Button } from "@mui/material";

function WebCam() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);
  const [playing, setPlaying] = useState(undefined);

  const videoConstraints = {
    //후면카메라 설정
    facingMode: { exact: "environment" },
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);

  const getWebcam = () => {
    try {
      const constraints = {
        video: true,
        audio: false,
      };
      navigator.mediaDevices.getUserMedia(constraints);
    } catch (err) {
      console.log(err);
      return undefined;
    }
  };

  useEffect(() => {
    getWebcam();
  }, []);

  return (
    <div className="Container">
      {img === null ? (
        <>
          {/* <TestOverlay /> */}
          <Webcam
            style={{ width: "338px", height: "496px" }}
            imageSmoothing={true}
            screenshotFormat="image/webp"
            ref={webcamRef}
            // videoConstraints={videoConstraints} //후면 카메라 사용
          />
          <div>
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

export default WebCam;
