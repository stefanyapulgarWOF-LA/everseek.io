import { React, useRef, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import MainImage from "./Components/MainImage";
import NavBar from "./Components/NavBar";
import Services from "./Components/Services";
import { LangProvider } from "./Lang/LangProvider";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [activeSection, setActiveSection] = useState("")
  const [topBar, setTopBar] = useState(0);
  const navRef = useRef(null);
  const [shouldScroll, setShouldScroll] = useState(true); // Estado para controlar si se debe realizar el desplazamiento
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);
  const mainRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  let anchoViewport = window.outerWidth;
  let largoViewport = window.outerHeight;
//para obtener la altura del navBar, para no perder espacio, no se esta ocupando
  useEffect(() => {
    // Obtén la altura del NavBar al cargar la página
    if(navBarHeight !== 0) {
     setTopBar(navBarHeight); 
    }
  }, [navRef.current]);
  const scrollToNav= () => {
    navRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToMain = () => {
    mainRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });

  //   let headerFix = 60;
  //   let elementPosition = servicesRef.current.getBoundingClientRect().top;
  //   let offsetPosition = elementPosition - headerFix;

  //   const currentScrollPosition = window.scrollY;

  //   if (currentScrollPosition === previousScrollPosition) {
  //     setShouldScroll(false)
  //     setPreviousScrollPosition(offsetPosition);
  //   } else {
  //     setShouldScroll(true)
  //     setPreviousScrollPosition(offsetPosition);
  //   }
  // if(shouldScroll){
  //   window.scrollTo({
  //     top: offsetPosition,
  //     behavior: "smooth",
  //   });
  // }
  };
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //Efecto para marcar la seccion en la que se encuentra el scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      let currentSection ="";
       sections.forEach((section) => {
        const sectionId = section.getAttribute("id")
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          window.pageYOffset >= sectionTop - sectionHeight / 2 &&
          window.pageYOffset < sectionTop + sectionHeight
        ) {
          currentSection = sectionId;
        }
      }); 
      
      setActiveSection(currentSection)
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
}, [activeSection])
  return (
    <LangProvider>
      <Router>
        <div className="App">
          <section ref={navRef} id="nav">
          <NavBar service={scrollToServices} contact={scrollToContact} nav={scrollToNav} activeSection={activeSection} setNavBarHeight={setNavBarHeight} anchoViewport={anchoViewport}/>
          </section>
          <section ref={mainRef} id="main">
            <MainImage
              service={scrollToServices}
              anchoViewport={anchoViewport}
              largoViewport={largoViewport}
            />
          </section>
          {loading ? (
            <>
              <section ref={servicesRef} id="services">
                <Services anchoViewport={anchoViewport} />
              </section>
              <section ref={contactRef} id="contact">
                <ContactUs anchoViewport={anchoViewport} />
              </section>
            </>
          ) : null}

          {/* <Routes>
          <Route exact path="/services" element={Services} />
          <Route exact path="/contact" element={ContactUs} /> 
        </Routes> */}
        </div>
      </Router>
    </LangProvider>
  );
}

export default App;
