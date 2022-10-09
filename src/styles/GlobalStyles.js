import { createGlobalStyle } from "styled-components";
export const pointColor = "#F39C4B";

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
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FFF;
        font-weight: 500;
        margin-top: 113px;
    }


    canvas{
        margin-top: -140px;
        height: 400px;
        width: 100%;
      }
      
      @media only screen and (max-width: 375px) and (min-width: 375px) { //375px 너무 작아서 수정했음
        .App {
          width: 375px;
          height: 100vh;
          font-family: 'Montserrat';
          font-style: normal;
        }
      }
      @media only screen and (min-width: 360px) {
        .App {
          width: 360px;
          height: 100vh;
          font-family: 'Montserrat';
          font-style: normal;
        }
      }
      @media only screen and (min-width: 280px) {
        .App {
          width: 280px;
          height: 100vh;
          font-family: 'Montserrat';
          font-style: normal;
          & > {
            float: left;
          }
        }
      }

`;
