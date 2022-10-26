import React from "react";
import { Title } from "../../styles/styles";
import InputButton from "../../components/Button/InputButton.js";
import SubmitButton from "../../components/Button/SubmitButton.js";

import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";

const SignInButton = styled.button`
  font-size: 16px;
  background-color: white;
  border-style: solid;
  color: ${pointColor};
  font-weight: 600;
  font-size: 16px;
  border-radius: 12px;
  border-color: ${pointColor};
  outline: 0;
  box-shadow: 2px 2px 4px #b3b3b3;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80vw;
  max-width: 354px;
  height: 50px;
  border-radius: 12px;
`;

const styles = {
  fontWeight: "600",
  fontSize: "12px",
  width: "85vw",
  maxWidth: "354px",
};

export default function LogIn() {
  return (
    <div>
      <Title>로그인</Title>
      <InputButton placeholder="아이디를 입력해주세요" />
      <InputButton placeholder="비밀번호를 입력해주세요" />
      <div style={styles}>
        <div style={{ float: "right" }}>
          {/* 페이지 만들어야함 */}
          <div style={{ display: "inline-block" }}>아이디 찾기</div>
          {" ㅣ "}
          <div style={{ display: "inline-block" }}>비밀번호 찾기</div>
        </div>
      </div>
      {/* Link props로 주기 */}
      <SubmitButton title="로그인" />
      <SignInButton>회원가입</SignInButton>
    </div>
  );
}
