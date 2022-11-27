import React, { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Button } from "@mui/material";
import CheckModal from "../Camera/CheckModal";
import axios from "../../api/axios";
import { useDispatch } from "react-redux";
import { getDetectionResults } from "../../actions/action";

function WebCam() {
  const dispatch = useDispatch();
  const [img, setImg] = useState(null);
  const [formdata, setFormData] = useState(null);
  // const [modalOpen, setModalOpen, clickRef] = useModalClose(false);/
  const [modalOpen, setModalOpen] = useState(false);

  const webcamRef = useRef(null);

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

  //base64를 Blob 오브젝트로 만드는 함수
  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    if (b64Data === "" || b64Data === undefined) return;

    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  };

  //파일 base64 형식에서 File 형식으로 디코딩 변환
  const convertBase64IntoFile = (image, fileName) => {
    const mimeType = image?.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/)[0]; // image/jpeg
    const realData = image.split(",")[1]; // 이 경우에선 /9j/4AAQSkZJRgABAQAAAQABAAD...

    const blob = b64toBlob(realData, mimeType);
    const raw = new File([blob], fileName, { type: mimeType });

    const fileList = [{ name: raw.name, size: raw.size, uid: 1, raw }];
    return fileList;
  };

  // 모달창 노출
  const showModal = () => {
    setModalOpen(true);
  };

  const sendImage = async () => {
    setFormData(convertBase64IntoFile(img, "object.jpeg"));

    console.log(formdata);
    showModal();

    // axios 요청 보내기

    await axios
      .post(
        `/product`, //주소 바꿔야할 듯
        {
          data: formdata,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            // Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
          },
        }
      )
      .then((response) => {
        console.log("webCam107", response.data);
        dispatch(getDetectionResults(response.data.data)); //여기 데이터 형식 확인 후 수정해야함
      })
      .catch((e) => console.log(e));
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
            style={webCamWrap}
            imageSmoothing={true}
            screenshotFormat="image/jpg"
            ref={webcamRef}
            // videoConstraints={videoConstraints} //후면 카메라 사용
          />
          <div>
            <Button onClick={capture}>Capture photo</Button>
          </div>
        </>
      ) : (
        <div>
          <div style={webCamWrap}>
            <img
              src={img}
              alt="screenshot"
              style={{
                width: "338px",
                height: "auto",
              }}
            />
          </div>
          <div>
            <Button onClick={() => setImg(null)}>Retake</Button>
            <Button onClick={sendImage}>전송하기</Button>
            {modalOpen && (
              <CheckModal setModalOpen={setModalOpen} />
              // clickRef={clickRef}
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default WebCam;

const webCamWrap = {
  width: "375px",
  height: "496px",
  padding: "5px",
  backgroundColor: "black",
  borderRadius: "20px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
