import { createContext, useState, useContext } from "react";

const AllContext = createContext();
export function useAllContext() {
  return useContext(AllContext);
}

const PageContext = ({ children }) => {
  const [refContact, setRefContact] = useState();
  const [refServices, setRefServices] = useState();
  const [changePage, setChangePage] = useState(false);
  const [changePageToAbout, setChangePageToAbout] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [refNav, setRefNav] = useState();
  const [refAbout, setRefAbout] = useState();

  const handleScroll = (sections) => {
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
  const value = {
    refContact,
    setRefContact,
    refServices,
    setRefServices,
    changePage,
    setChangePage,
    activeSection,
    setActiveSection,
    handleScroll,
    refNav,
    setRefNav,refAbout, setRefAbout, changePageToAbout, setChangePageToAbout
  };

  return <AllContext.Provider value={value}>{children}</AllContext.Provider>;
};

export { PageContext, AllContext };
