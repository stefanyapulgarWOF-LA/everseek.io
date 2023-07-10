
import { LangProvider } from "../Lang/LangProvider";
import { React, useState, useEffect, useRef, useLayoutEffect } from "react";
import { PageContext } from "../Context/AllContext";
import "./app.css";

function App({Component, pageProps}) {
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
      <Component {...pageProps} />
      </LangProvider>
    </PageContext>
  );
}

export default App;
