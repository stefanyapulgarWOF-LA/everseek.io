import { React, useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import About from "../Components/About";
import MainImage from "../Components/MainImage";
import { useContext } from "react";
import { AllContext } from "../Context/AllContext";
import Map from "../Components/Map";
import ContactUs from "../Components/ContactUs";
import NavBar from "./nav-bar";

export default function AboutUs() {
    const contactRef = useRef(null);
    const aboutRef = useRef(null);
    const mainRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const {
    setRefContact, refNav, refAbout, setRefAbout, changePageToAbout, setChangePageToAbout, refServices, setActiveSection
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

  return (
    <Box sx={{}}>
        <NavBar 
          nav={scrollToNav}
          setNavBarHeight={setNavBarHeight}/>
      {/* {loading? <> */}
        <section ref={aboutRef} id="about">
        <About />
              <Map />
      </section>
      <section id="contact" ref={contactRef} >
        <ContactUs nav={scrollToNav}/>
      </section>
      {/* </> :null} */}
      
    </Box>
  );
}
