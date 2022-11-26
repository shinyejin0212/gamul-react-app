import React from "react";
import { Title } from "../../styles/styles";
import SubmitButton from "../../components/Button/SubmitButton.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { pointColor } from "../../styles/GlobalStyles";
import { setRefreshToken } from "../../storage/Cookie";
import { loginUser } from "../../api/User";
import { SET_TOKEN } from "../../storage/Auth";

const InputBlank = styled.input`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 80vw;
  max-width: 354px;
  height: 50px;
  border-radius: 12px;
  border-style: solid;
  border-color: #dadada;
  padding: 10px;
  ::placeholder {
    color: #dadada;
  }
`;

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: " ",
      password: " ",
    },
  });

  const onValid = async ({ email, password }) => {
    // alert(JSON.stringify(data));/
    console.log({ email, password }, "onvalid");
    setValue("password", "");

    // 백으로부터 받은 응답
    const response = await loginUser({ email, password });

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.json.refresh_token);
      dispatch(SET_TOKEN(response.json.access_token));

      return navigate("/");
    } else {
      console.log(response.json);
    }
  };
  const onInvalid = (data) => console.log(data, "onInvalid");

  return (
    <div>
      <Title>로그인</Title>
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div>
          <InputBlank
            placeholder="아이디를 입력해주세요"
            {...register("email", { required: true })}
          />
        </div>
        <div>
          <InputBlank
            placeholder="비밀번호를 입력해주세요"
            {...register("password", { required: true })}
          />
        </div>
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
      </form>
      <SignInButton>회원가입</SignInButton>
    </div>
  );
}
