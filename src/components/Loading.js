import React from "react";
import loading_spin from "../assets/icons/loading_spin.gif";
function Loading() {
  return (
    <div style={spinWrap}>
      <img src={loading_spin} style={spinStyle}></img>
    </div>
  );
}

export default Loading;

const spinStyle = {
  zIndex: "900",

  /* 중앙 배치 */
  /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
  /* translate는 본인의 크기 기준으로 작동한다. */
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const spinWrap = {
  position: "fixed",
  zIndex: "800",
  top: "0",
  left: "0",
  bottom: "0",
  right: "0",
  background: "rgba(0, 0, 0, 0.7)",
};
