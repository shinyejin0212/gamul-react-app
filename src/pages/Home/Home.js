import React from "react";
import main_logo from "../../assets/icons/main_logo.png";
import { HomeAlign, MainLogo, StartButton } from "./style";

export default function Home() {
  return (
    <HomeAlign>
      <MainLogo
        alt="main__logo"
        src={main_logo}
        onClick={() => (window.location.href = "/")}
      />
      <StartButton>시작하기</StartButton>
      Already have an account? - Login
    </HomeAlign>
  );
}
