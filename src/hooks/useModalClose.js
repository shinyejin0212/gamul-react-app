import { useState, useRef, useEffect } from "react";

export const useModalClose = (compoId) => {
  const [isOutside, setIsOutside] = useState(false);
  const clickRef = useRef(null); //특정 DOM 선택할 수 있게 해줌

  const clickModalOutside = (e) => {
    const target = e.target;
    if (!clickRef.current?.contains(target)) setIsOutside(false);
  };

  useEffect(() => {
    // modal outside click시
    if (isOutside) {
      document.addEventListener("click", clickModalOutside);
    } else {
      document.removeEventListener("click", clickModalOutside);
    }
    // 이벤트 제거
    return () => {
      document.removeEventListener("click", clickModalOutside);
    };
  }, [isOutside]);

  return [isOutside, setIsOutside, clickRef];
};
