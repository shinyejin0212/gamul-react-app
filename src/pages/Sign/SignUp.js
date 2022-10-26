import React from "react";
import { Title } from "../../styles/styles";
import InputButton from "../../components/Button/InputButton.js";
import SubmitButton from "../../components/Button/SubmitButton.js";

const explain = {
  fontWeight: "500",
  fontSize: "12px",
  padding: "10px",
};

const secondtitle = {
  fontWeight: "500",
  fontSize: "12px",
  padding: "10px",
  fontWeight: "600",
  fontSize: "12px",
  width: "85vw",
  maxWidth: "354px",
};

export default function SignUp() {
  return (
    <div>
      <Title>회원가입</Title>
    </div>
  );
}
