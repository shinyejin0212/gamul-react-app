import React from "react";
import main_logo from "../../assets/icons/main_logo.png";
import { HomeAlign, MainLogo, StartButton } from "./style";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeAlign style={{ whiteSpace: "nowrap" }}>
      <MainLogo
        alt="main__logo"
        src={main_logo}
        onClick={() => (window.location.href = "/")}
      />
      <StartButton>시작하기</StartButton>
      <div>
        Already have an account? -
        <Link to="/login" style={{ marginLeft: "5px", color: "#4B70F3" }}>
          Login
        </Link>
      </div>
    </HomeAlign>
  );
}
