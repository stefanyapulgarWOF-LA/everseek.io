import { React, useRef, useEffect, useState, useContext } from "react";
import ContactUs from "../Components/ContactUs";
import MainImage from "../Components/MainImage";
import NavBar from "./nav-bar";
import Services from "../Components/Services";
// import "../styles/index.css";
import { AllContext, useAllContext } from "../Context/AllContext";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [navBarHeight, setNavBarHeight] = useState(0);
   const [topBar, setTopBar] = useState(0);
  const navRef = useRef(null);
  const [anchoViewport, setAnchoViewport] = useState()
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const {
    setRefContact,
    setRefServices,
    changePage,
    setChangePage, setRefNav, activeSection, setActiveSection
  } = useAllContext();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let anchoViewport = window?.outerWidth;
      setAnchoViewport(anchoViewport)
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
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, [mainRef.current]);

  useEffect(() => {
    setRefContact(contactRef);
    setRefServices(servicesRef)
    setRefNav(navRef)
  });
  useEffect(() => {
    if (changePage) {
      setTimeout(() => {
        scrollToServices();
        setChangePage(false)
      }, 800);
    }
  }, [changePage, setChangePage]);

  useEffect(() => {}, [activeSection]);
  return (
    <>
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
      {loading? (
        <>
          <section ref={servicesRef} id="services">
            <Services anchoViewport={anchoViewport} />
          </section>
          <section ref={contactRef} id="contact">
            <ContactUs nav={scrollToNav} />
          </section>
        </>
      ) : null}
    </>
  );
}
