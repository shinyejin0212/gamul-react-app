import React, { useEffect, useRef, useState } from "react";
import styles from "./CheckModal.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";
import Loading from "../Loading";

import axios from "../../api/axios";
import { setGraph, getDetectionResults } from "../../actions/action";

function CheckModal({ setModalOpen, setImg }) {
  const [isChecked, setIsChecked] = useState([]);
  const [isSelected, setIsSelected] = useState("");
  const currentMarket = useSelector((state) => state.selectMarketReducer[0]);
  const getResults = useSelector((state) => state.getDetectionResultsReducer);

  const token = useSelector((state) => state.authToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("currentMarket", currentMarket);
  const [loading, setLoading] = useState(false);

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
  const onChangeCheck = (e, id, name, type) => {
    if (e.currentTarget.checked) {
      setIsChecked([name]);
      setIsSelected(name);
    } else {
      setIsChecked([]);
      setIsSelected(null);
    }
  };

  const sendResults = async () => {
    setLoading(true);
    await axios
      .get("/api/product", {
        params: { market: currentMarket, product: isSelected },
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token.accessToken}`, //Bearer 꼭 붙여줘야함
        },
      })
      .then((res) => {
        console.log("response", res.data.data);
        setLoading(false);

        // if (res.data.data.length > 0) {
        navigate("/price_history_graph");
        dispatch(setGraph(res.data.data.priceHistories));
        // } else {
        //   navigate("/price_history_graph");
        // }
      })
      .catch((e) => {
        console.log(e.message);
        alert("객체 인식에 실패하였습니다. 다시 시도해주세요.");
        closeModal();
        setImg(null);
        dispatch(getDetectionResults([]));
      });
  };

  return (
    <div className={styles.modal__background}>
      {loading ? <Loading /> : null}

      <div ref={modalRef} className={styles.container}>
        <button className={styles.close} onClick={closeModal}></button>

        <p className={styles.modal__title}>확인하기</p>
        <div className={styles.modal__orange_wrap}>
          {getResults[0] &&
            getResults.map((results) =>
              results.map((result) => (
                // console.log("checkmodal map함수", result.id)

                <li className={styles.modal__items}>
                  <StyledInput
                    type="checkbox"
                    id={result.name}
                    checked={isChecked.includes(result.name) || false}
                    onChange={(e) => onChangeCheck(e, result.id, result.name)}
                  />
                  {console.log("checkmodal map함수", result.name)}
                  {result.name} : {result.confidence}%
                </li>
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

const StyledInput = styled.input`
  appearance: none;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 10px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
    margin-right: 10px;
  }
`;
