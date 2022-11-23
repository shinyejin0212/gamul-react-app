import React from "react";
import { useForm } from "react-hook-form";
import { Title } from "../../styles/styles";
import InputButton from "../../components/Button/InputButton.js";
import SubmitButton from "../../components/Button/SubmitButton.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../../api/axios";

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

const CommentInsert = styled.form`
  height: 90px;
  display: flex;
  flex-direction: column;
`;

export default function SignUp() {
  const { register, watch, handleSubmit, setValue } = useForm();
  const onValid = async (data) => {
    alert(JSON.stringify(data));
    console.log(data, "onvalid");

    try {
      await axios.post(`/api/auth/signup`, {
        name: "data.nickname",
        email: "data.email",
        password: "data.password",
      });
    } catch (e) {
      console.log(e);
    }
  };
  const onInvalid = (data) => console.log(data, "onInvalid");
  console.log(watch());

  return (
    <>
      <Title>회원가입</Title>
      <div style={explain}>간단한 회원가입을 통해 GAMUL을 이용해보세요.</div>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div style={wrapInput}>
          <div style={secondtitle}>닉네임</div>
          <InputButton
            placeholder="닉네임을 입력해주세요"
            resister={register("nickname")}
          />
        </div>
        <div style={wrapInput}>
          <div style={secondtitle}>이메일</div>
          <InputButton
            placeholder="이메일을 입력해주세요"
            resister={register("email")}
          />
        </div>
        <div style={wrapInput}>
          <div style={secondtitle}>비밀번호</div>
          <InputButton
            placeholder="비밀번호를 입력해주세요 (영어+숫자 8자 이상)"
            resister={register("password")}
          />
        </div>
        <div style={wrapInput}>
          <div style={secondtitle}>비밀번호 확인</div>
          <InputButton
            placeholder="비밀번호를 다시 입력해주세요"
            resister={register("checkpassword")}
          />
        </div>

        <SubmitButton title="가입 완료하기" />
      </form>
      <br></br>
      이미 계정이 있으신가요?<br></br>
      <Link
        to="/login"
        style={{ marginLeft: "5px", color: "black", fontWeight: "600" }}
      >
        로그인하기
      </Link>
    </>
  );
}
