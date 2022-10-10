import React from "react";
import main_logo from "../../assets/icons/main_logo.png";
import { MainLogo } from "./style";

export default function Home() {
  return (
    <MainLogo
      alt="main__logo"
      src={main_logo}
      onClick={() => (window.location.href = "/")}
    />
  );
}
