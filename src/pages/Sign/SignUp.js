import React from "react";
import { Title } from "../../styles/styles";
import InputButton from "../../components/Button/InputButton.js";
import SubmitButton from "../../components/Button/SubmitButton.js";
import { Link } from "react-router-dom";

const wrapInput = {
  paddingBottom: "0.5vh",
};

const explain = {
  fontWeight: "500",
  fontSize: "14px",
  padding: "10px",
  marginBottom: "30px",
};

const secondtitle = {
  fontWeight: "500",
  fontSize: "18px",
  fontWeight: "600",
  textAlign: "left",
  margin: "auto",
  width: "80vw",
  maxWidth: "354px",
};

export default function SignUp() {
  return (
    <div>
      <Title>회원가입</Title>
      <div style={explain}>간단한 회원가입을 통해 GAMUL을 이용해보세요.</div>
      <div style={wrapInput}>
        <div style={secondtitle}>닉네임</div>
        <InputButton placeholder="닉네임을 입력해주세요" />
      </div>
      <div style={wrapInput}>
        <div style={secondtitle}>이메일</div>
        <InputButton placeholder="이메일을 입력해주세요" />
      </div>
      <div style={wrapInput}>
        <div style={secondtitle}>비밀번호</div>
        <InputButton placeholder="비밀번호를 입력해주세요 (영어+숫자 8자 이상)" />
      </div>
      <div style={wrapInput}>
        <div style={secondtitle}>비밀번호 확인</div>
        <InputButton placeholder="비밀번호를 다시 입력해주세요" />
      </div>
      <SubmitButton title="가입 완료하기" />
      <br></br>
      이미 계정이 있으신가요?<br></br>
      <Link
        to="/login"
        style={{ marginLeft: "5px", color: "black", fontWeight: "600" }}
      >
        로그인하기
      </Link>
    </div>
  );
}
