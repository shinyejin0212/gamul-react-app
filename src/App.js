import "./App.css";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";

// compoenets
import Navbar from "./components/Navbar/Navbar";

// pages
import Home from "./pages/Home/Home";
import LogIn from "./pages/Sign/LogIn";
import SignUp from "./pages/Sign/SignUp";
import Main from "./pages/Main/Main";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* <div className="body"> */}
              <Route index element={<Home />} />
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="main" element={<Main />} />
              {/* </div> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
