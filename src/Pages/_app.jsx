import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import AboutUs from "./about-us";
import { LangProvider } from "../Lang/LangProvider";
import Home from "./index";
import { React, useState, useEffect, useRef, useLayoutEffect } from "react";
import { PageContext } from "../Context/AllContext";
import "../styles/index.css";

function App() {
  // const Wrapper = ({ children }) => {
  //   const location = useLocation();
  //   useLayoutEffect(() => {
  //     if (typeof window !== "undefined") {
  //       document.documentElement.scrollTo(0, 0);
  //     }
  //   }, [location.pathname]);
  //   return children;
  // };

  return (
    <PageContext>
      <LangProvider>
        <Router basename="everseek.io">
          {/* <Wrapper> */}
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          {/* </Wrapper> */}
        </Router>
      </LangProvider>
    </PageContext>
  );
}

export default App;
