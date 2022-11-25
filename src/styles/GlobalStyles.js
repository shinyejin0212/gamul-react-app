import { createGlobalStyle } from "styled-components";
export const pointColor = "#FF914D";
export const lightColor = "#ffdeca";

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


    body {
        width: 100vw;
        // height: calc(var(--vh, 1vh) * 100);        
        overflow-x: hidden;
        overflow-y: hidden;
        // margin: 0;
        font-family: 'Montserrat', sans-serif;
        background-color: #FFF;      

    }


    canvas{
        margin-top: -140px;
        height: 400px;
        width: 100%;
      }
      
      @media only screen and  (min-width: 279px) { //375px 너무 작아서 수정했음
        // (max-width: 600px) and
        .App {
          position:relative
          width: 100vw;
          height: calc(var(--vh, 1vh) * 100)vh;
          font-family: 'Montserrat', sans-serif;

          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          & > {
            float: left;
          }
        }
      }
      

`;
