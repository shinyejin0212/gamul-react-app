import React, { useState } from "react";
import main_logo from "../../assets/icons/main_logo.png";
import { HomeAlign, MainLogo, StartButton } from "./style";
import { Link } from "react-router-dom";
import SubmitButton from "../../components/Button/SubmitButton.js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading.js";
import styled from "styled-components";
import { pointColor, lightColor } from "../../styles/GlobalStyles";
import { setRefreshToken } from "../../storage/Cookie";
import { loginUser } from "../../api/User";
import { SET_TOKEN } from "../../storage/Auth";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authToken);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onValid = async ({ email, password }) => {
    // alert(JSON.stringify(data));/
    console.log({ email, password }, "onvalid");
    setValue("password", "");
    setLoading(true);

    // 백으로부터 받은 응답
    const response = await loginUser({ email, password });

    if (response.status) {
      // 쿠키에 Refresh Token, store에 Access Token 저장
      setRefreshToken(response.json.data.refreshToken);
      dispatch(SET_TOKEN(response.json.data.accessToken));

      console.log("왜 안돼", token);

      setLoading(false);
      return navigate("/main");
    } else {
      console.log(response);
    }
  };
  const onInvalid = (data) => console.log(data, "onInvalid");
  return (
    <div>
      {loading ? <Loading /> : null}
      <HomeAlign
        style={{
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <MainLogo
          alt="main__logo"
          src={main_logo}
          onClick={() => (window.location.href = "/")}
        />
        {/* 로그인 되어 있을 시 main으로 가도록 */}
        {/* <StartButton onClick={() => (window.location.href = "/main")}>
        시작하기
      </StartButton>
      <div>
        Create account -
        <Link to="/signup" style={{ marginLeft: "5px", color: "#4B70F3" }}>
          SignUp
        </Link>
      </div> */}
        <div>
          <form onSubmit={handleSubmit(onValid, onInvalid)}>
            <div>
              <InputBlank
                placeholder="아이디를 입력해주세요"
                {...register("email", { required: true })}
              />
            </div>
            <div>
              <InputBlank
                type="password"
                placeholder="비밀번호를 입력해주세요"
                {...register("password", { required: true })}
              />
            </div>
            <div style={styles}></div>
            {/* Link props로 주기 */}
            <SubmitButton
              title="로그인 하기"
              onClick={() => (window.location.href = "/main")}
            />
          </form>
          <br></br>
          <div
            style={{
              fontSize: "12px",
            }}
          >
            아직 계정이 없으신가요?
          </div>
          <Link
            to="/signup"
            style={{
              marginLeft: "5px",
              color: "black",
              fontWeight: "600",
              fontSize: "12px",
            }}
          >
            회원가입하기
          </Link>
        </div>
      </HomeAlign>
    </div>
  );
}
const InputBlank = styled.input`
  margin-top: 12px;
  margin-bottom: 12px;
  width: 75vw;
  max-width: 340px;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  border-color: ${lightColor};
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
