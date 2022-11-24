import React from "react";
import { useForm } from "react-hook-form";
import { Title } from "../../styles/styles";
import SubmitButton from "../../components/Button/SubmitButton.js";
import { Link } from "react-router-dom";
import axios from "../../api/axios";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const InputBlank = {
  marginTop: "12px",
  marginBottom: "12px",
  width: "80vw",
  maxWidth: "354px",
  height: "50px",
  borderRadius: "12px",
  borderStyle: "solid",
  borderColor: "#dadada",
  padding: "10px",
  placeholder: {
    color: "#dadada",
  },
};

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
  const schema = yup
    .object()
    .shape({
      nickname: yup
        .string()
        .required("제목을 입력해주세요 😰")
        .min(2, "2자 이상 입력해주세요!"),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
      checkpassword: "",
    },
  });

  const onValid = async (data) => {
    // alert(JSON.stringify(data));/
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

  return (
    <>
      <Title>회원가입</Title>
      <div style={explain}>간단한 회원가입을 통해 GAMUL을 이용해보세요.</div>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div style={wrapInput}>
          <div style={secondtitle}>닉네임</div>
          <input
            style={InputBlank}
            placeholder="닉네임을 입력해주세요"
            {...register("nickname")}
          />
        </div>
        <div style={wrapInput}>
          <div style={secondtitle}>이메일</div>
          <input
            style={InputBlank}
            placeholder="이메일을 입력해주세요"
            {...register("email")}
          />
        </div>
        <div style={wrapInput}>
          <div style={secondtitle}>비밀번호</div>
          <input
            style={InputBlank}
            placeholder="비밀번호를 입력해주세요 (영어+숫자 8자 이상)"
            {...register("password")}
          />
        </div>
        <div style={wrapInput}>
          <div style={secondtitle}>비밀번호 확인</div>
          <input
            style={InputBlank}
            placeholder="비밀번호를 다시 입력해주세요"
            {...register("checkpassword")}
          />
        </div>
        {errors.name && errors.name.message}
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
