import { React, useRef, useEffect, useState, useContext } from "react";
import ContactUs from "./Components/ContactUs";
import MainImage from "./Components/MainImage";
import NavBar from "./nav-bar";
import Services from "./Components/Services";
// import "../styles/index.css";
import { AllContext, useAllContext } from "../Context/AllContext";
import Head from "next/head";
import { useRouter } from "next/router";

import { Fragment } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [topBar, setTopBar] = useState(0);
  const navRef = useRef(null);
  const [anchoViewport, setAnchoViewport] = useState();
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const {
    setRefContact,
    setRefServices,
    changePage,
    setChangePage,
    setRefNav,
    activeSection,
    setActiveSection,
  } = useContext(AllContext);
  useEffect(() => {
    if (typeof window !== "undefined") {
      let anchoViewport = window?.outerWidth;
      console.log(
        "🚀 ~ file: index.jsx:32 ~ useEffect ~ anchoViewport:",
        anchoViewport
      );
      setAnchoViewport(anchoViewport);
    }
  }, []);
  //para obtener la altura del navBar, para no perder espacio, no se esta ocupando
  useEffect(() => {
    // Obtén la altura del NavBar al cargar la página
    if (navBarHeight !== 0) {
      setTopBar(navBarHeight);
    }
  }, [navRef.current]);
  const scrollToNav = () => {
    navRef.current.scrollIntoView({ behavior: "smooth" });
  };
  //   const scrollToMain = () => {
  //     mainRef.current.scrollIntoView({ behavior: "smooth" });
  //   };
  const scrollToServices = () => {
    servicesRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    contactRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

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
  }, [loading]);
  //tiempo para obtener la altura del video principal
  useEffect(() => {
    // if(anchoViewport > 450){
      console.log("index", mainRef.current);
    setTimeout(() => {
      setLoading(true);
    }, 800);
   // } 
    // else {
    //   setLoading(true);
    //   console.log('en else')
    // }
    
  }, [mainRef.current]);

  useEffect(() => {
    setRefContact(contactRef);
    setRefServices(servicesRef);
    setRefNav(navRef);
    console.log("🚀 ~ file: index.jsx:107 ~ useEffect ~ navRef:", navRef)
  });
  useEffect(() => {
    if (changePage) {
      setTimeout(() => {
        scrollToServices();
        setChangePage(false);
      }, 800);
    }
  }, [changePage, setChangePage]);

  useEffect(() => {}, [activeSection]);
  return (
    <>
      <Fragment>
        <Head>
          <title>Everseek.io</title>
          <link rel="icon" href="/assets/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="En Everseek, ofrecemos un servicio de detección temprana y notificación de incendios forestales que complementa el trabajo humano con Inteligencia Artificial."
          />

          {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="https://smtpjs.com/v3/smtp.js" defer></script> */}
        </Head>
        <section ref={navRef} id="nav">
          <NavBar
            service={scrollToServices}
            contact={scrollToContact}
            nav={scrollToNav}
            activeSection={activeSection}
            setNavBarHeight={setNavBarHeight}
            anchoViewport={anchoViewport}
          />
        </section>
        <section ref={mainRef} id="main">
          <MainImage
            service={scrollToServices}
            anchoViewport={anchoViewport}
            src={"/assets/Imagen principal.jpg"}
          />
        </section>
        {loading ? (
          <>
            <section ref={servicesRef} id="services">
              <Services anchoViewport={anchoViewport} />
            </section>
            <section ref={contactRef} id="contact">
              <ContactUs nav={scrollToNav} />
            </section>
          </>
        ) : null}
      </Fragment>
    </>
  );
}
