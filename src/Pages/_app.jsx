
import { LangProvider } from "../Lang/LangProvider";
import { React, useState, useEffect, useRef, useLayoutEffect } from "react";
import { PageContext } from "../Context/AllContext";
import "./app.css";
import { useRouter } from "next/router";

function App({Component, pageProps}) {
  let router = useRouter();
  console.log('en app')
  // const Wrapper = ({ children }) => {
  //   const location = useLocation();
  //   useLayoutEffect(() => {
  //     if (typeof window !== "undefined") {
  //       document.documentElement.scrollTo(0, 0);
  //     }
  //   }, [location.pathname]);
  //   return children;
  // };
  useEffect(()=>{
    router.push(window.location.href)
    console.log("🚀 ~ file: _app.jsx:130 ~ useEffect ~ router", router)
},[])
  return (
    <PageContext>
      <LangProvider>
      <Component {...pageProps} />
      </LangProvider>
    </PageContext>
  );
}

export default App;
