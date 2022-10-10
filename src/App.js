import "./App.css";
import { Outlet, Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyles";

// compoenets
import Navbar from "./components/Navbar/Navbar";

// pages
import Home from "./pages/Home/Home";
import LogIn from "./pages/Sign/LogIn";
import SignUp from "./pages/Sign/SignUp";

const Layout = () => {
  return (
    <header>
      <Navbar />
      <Outlet />
    </header>
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
              <Route index element={<Home />} />
              <Route path="login" element={<LogIn />} />
              <Route path="signup" element={<SignUp />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
