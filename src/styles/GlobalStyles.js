import { createGlobalStyle } from "styled-components";
export const pointColor = "#F39C4B";

export const setScreenSize = () => {
  let vh = window.innerHeight * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

setScreenSize();

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        font-size: 0.9rem;
    }

    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    @font-face {
        font-family: 'NanumSquareRound';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    body {
      position : fixed;
        width: 100vw;
        height: calc(var(--vh, 1vh) * 100);        
        overflow-y: scroll;
        margin: 0;
        display: flex;
        justify-content: center;
        background-color: #FFF;
        // align-items: center;
        // margin-top: 113px;
    }


    canvas{
        margin-top: -140px;
        height: 400px;
        width: 100%;
      }
      
      @media only screen and (max-width: 375px) and (min-width: 279px) { //375px 너무 작아서 수정했음
        .App {
          width: 100vw;
          height: calc(var(--vh, 1vh) * 100);
          font-family: 'Montserrat';
          font-style: normal;
        }
      }


`;
