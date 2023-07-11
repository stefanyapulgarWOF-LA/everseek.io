import { React, useEffect, useState, useRef, Fragment } from "react";
import { Box } from "@mui/material";
import About from "../Components/About";
import MainImage from "../Components/MainImage";
import { useContext } from "react";
import { AllContext } from "../../Context/AllContext";
import Map from "../Components/Map";
import ContactUs from "../Components/ContactUs";
import NavBar from "../Components/nav-bar";
import Head from "next/head";

export default function AboutUs() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const mainRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [navBarHeight, setNavBarHeight] = useState(0);
  console.log("🚀 ~ file: about-us.jsx:18 ~ AboutUs ~ navBarHeight:", navBarHeight)
  const {
    setRefContact,
    refNav,
    refAbout,
    setRefAbout,
    changePageToAbout,
    setChangePageToAbout,
    refServices,
    setActiveSection,
  } = useContext(AllContext);

  //Efecto para marcar la sección en la que se encuentra el scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      let currentSection = "";
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.pageYOffset >= sectionTop - sectionHeight / 2 &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setRefContact(contactRef);
    setRefAbout(aboutRef);
  });
  const scrollToNav = () => {
    refNav.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, [mainRef.current]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      let currentSection = "";
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.pageYOffset >= sectionTop - sectionHeight / 2 &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  // useEffect(() => {
  //   if (changePageToAbout) {
  //     setTimeout(() => {
  //       scrollToAbout()
  //       setChangePageToAbout(false)
  //     }, 800);
  //   }
  // }, [changePageToAbout, setChangePageToAbout]);
console.log(refNav)
  return (
    <Fragment>
      <Head>
        <title> Everseek.io</title>
        <link rel="icon" href="/assets/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="En Everseek, ofrecemos un servicio de detección temprana y notificación de incendios forestales que complementa el trabajo humano con Inteligencia Artificial."
        />

        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="https://smtpjs.com/v3/smtp.js" defer></script> */}
      </Head>
      <Box sx={{}}>
        <NavBar nav={scrollToNav} setNavBarHeight={setNavBarHeight} />
        {loading? <>
        <section ref={aboutRef} id="about">
          <About navBarHeight={navBarHeight}/>
          <Map />
        </section>
        <section id="contact" ref={contactRef}>
          <ContactUs nav={scrollToNav} />
        </section>
        </> :null}
      </Box>
    </Fragment>
  );
}
