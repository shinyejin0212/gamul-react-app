import React from "react";
import { useEffect, useRef } from "react";
import styles from "./CheckModal.module.css";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

function CheckModal({ setModalOpen }) {
  const getResults = useSelector((state) => state.getDetectionResultsReducer);
  console.log("checkmodal getResults", getResults);
  // 모달 끄기 (X버튼 onClick 이벤트 핸들러)
  const closeModal = () => {
    setModalOpen(false);
  };

  // 모달 외부 클릭시 끄기 처리
  // Modal 창을 useRef로 취득
  const modalRef = useRef(null);

  useEffect(() => {
    // 이벤트 핸들러 함수
    const handler = (event) => {
      // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    // document.addEventListener('touchstart', handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      // document.removeEventListener('touchstart', handler); // 모바일 대응
    };
  });

  const sendResults = () => {};
  return (
    <div className={styles.modal__background}>
      <div ref={modalRef} className={styles.container}>
        <button className={styles.close} onClick={closeModal}></button>

        <p className={styles.modal__title}>확인하기</p>
        <div className={styles.modal__orange_wrap}>
          {getResults &&
            getResults.map((results) =>
              results.map((result) => (
                // console.log("checkmodal map함수", result.id)
                <div className={styles.modal__items}>
                  {console.log("checkmodal map함수", result.name)}
                  {result.name} : {result.confidence}%
                </div>
              ))
            )}
        </div>
        <div className={styles.modal__verification}>
          정말 인식을 완료하시겠습니까?
        </div>
        <Button onClick={sendResults}>확인 완료하기</Button>
      </div>
    </div>
  );
}

export default CheckModal;

const Button = styled.button`
  font-size: 16px;
  background-color: ${pointColor};
  color: white;
  font-weight: 700;
  font-size: 18px;
  border-radius: 12px;
  border: 0;
  outline: 0;
  box-shadow: 2px 2px 4px #b3b3b3;
  margin-top: 4px;
  margin-bottom: 12px;
  width: 80vw;
  max-width: 232px;
  height: 4rem;
  border-radius: 12px;
`;
