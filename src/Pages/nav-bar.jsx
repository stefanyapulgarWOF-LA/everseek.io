import { React, useState, useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Container,
  Typography,
  Toolbar,
  Button,
  IconButton,
  MenuItem,
  Menu,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { langContext } from "../Lang/LangProvider";
import { FormattedMessage } from "react-intl";
import "../styles/index.css";
import { AllContext } from "../Context/AllContext";
/**
 * Componente que contiene el menu de navegación
 * @returns
 */
export default function NavBar({
  service,
  contact,
  setNavBarHeight,
  anchoViewport,
  // activeSection,
  nav,
}) {
  const { switchLanguage, locale } = useContext(langContext);
  const {
    refContact,
    setRefContact,
    refServices,
    setRefServices,
    setChangePage,
    refAbout,
    setAboutRef,
    changePageToAbout,
    setChangePageToAbout, activeSection
  } = useContext(AllContext);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [changeStyles, setChangeStyles] = useState(false);
  const [colorNav, setColorNav] = useState("#fff");
  const [anchorLang, setAnchorLang] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const open = Boolean(anchorLang);
  let refApp = useRef(null);
  const handleClick = (event) => {
    setAnchorLang(event.currentTarget);
  };
  const handleClose = (e) => {
    console.log(e)
    if (e.target.outerText === "EN") {
      switchLanguage("en-US");
    } else if (e.target.outerText === "ES") {
      switchLanguage("es-ES");
    } else if (e.target.outerText === "PT") {
      switchLanguage("pt-BR");
    }
    setAnchorLang(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/about-us") {
        setChangeStyles(true);
        setColorNav("#07293F");
      } else if (window.scrollY >= 150) {
        setChangeStyles(true);
        setColorNav("#07293F");
      } else {
        setChangeStyles(false);
        setColorNav("#fff");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  useEffect(() => {}, [activeSection]);

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    setNavBarHeight(refApp.current.offsetHeight);
  }, [refApp.current]);

  const scrollToContact = () => {
    refContact?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    refServices?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    refAbout?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSectionClick = () => {
    handleCloseNavMenu();
    if (location.pathname === "/about-us") {
      setChangePage(true);
      navigate(-1);
    } else if (location.pathname === "/") {
      setChangePageToAbout(true);
      navigate("/about-us");
    } else {
      // scrollToContact();
    }
  };


  return (
    <Box>
      <AppBar
        ref={refApp}
        position="fixed"
        sx={{
          // backgroundColor: changeStyles ? "#07293F" : "#fff",
          backgroundColor: colorNav,
          boxShadow: "none",
          borderBottom: {
            xs: "none",
            md: changeStyles ? "none" : "1px solid #b3b3b3",
          },
          transition: changeStyles ? "background-color .5s" : null,
        }}
      >
        <Container
          maxWidth={false}
          sx={{ "&.MuiContainer-root": { padding: "0 !important" } }}
        >
          <Toolbar
            disableGutters
            sx={{ justifyContent: { xs: "none", md: "none" } }}
          >
            {/*version mobile del menu */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: changeStyles ? "#fff" : "#0060a6" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem
                  value={"services"}
                  component={Link}
                  to="/"
                  onClick={(e) => {
                    handleCloseNavMenu(e);
                  }}
                >
                  <Typography textAlign="center">
                    <FormattedMessage
                      id="nav.item2"
                      defaultMessage="experiencia"
                    />
                  </Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/about-us"
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">
                    <FormattedMessage
                      id="nav.item1"
                      defaultMessage="nosotros"
                    />
                  </Typography>
                </MenuItem>

                {/* <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <FormattedMessage
                      id="nav.item3"
                      defaultMessage="contacto"
                    />
                  </Typography>
                </MenuItem> */}
                <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
              </Menu>
            </Box>
            <Box
              // onClick={nav}
              component={Link}
              to="/"
              sx={{
                marginLeft: { md: "60px" },
                marginY: { md: "12px" },
                width: "300px",
                cursor: "pointer",
                display: { xs: "flex", md: "inline" },
                justifyContent: { xs: "center" },
              }}
            >
              <img
                src={
                  changeStyles
                    ? "/assets/Everseek-blanco.png"
                    : "/assets/Everseek-azul.png"
                }
                alt="logo"
                style={{ width: "100%", transition: "opacity 0.5s" }}
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                width: "100%",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "55%",
                  justifyContent: "space-around",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <img src="/icons/Forma E.png"  style={{width:anchoViewport*0.0119047619, height:anchoViewport*0.0052910053, visibility:activeSection === "services"?"visible":"hidden"}} alt=""/> */}
                  <Button
                    onClick={() =>
                      location.pathname === "/about-us"
                        ? handleSectionClick()
                        : scrollToServices()
                    }
                    sx={{
                      my: 2,
                      color: changeStyles ? "#fff" : "#0060a6",
                      display: "block",
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    <FormattedMessage
                      id="nav.item2"
                      defaultMessage="experiencia"
                    />
                    <Divider
                      sx={{
                        backgroundColor: "#EB783E",
                        visibility:
                          activeSection === "services" ? "visible" : "hidden",
                      }}
                    />
                  </Button>
                </Box>
                <Box
                  // component={Link}
                  // to="/about-us"
                  onClick={() => {
                    location.pathname === "/"
                      ? handleSectionClick()
                      : scrollToAbout();
                  }}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textDecoration: "none",
                  }}
                >
                  {/* <img src="/icons/Forma E.png"  style={{width:anchoViewport*0.0119047619, height:anchoViewport*0.0052910053, visibility:activeSection === "main"?"visible":"hidden"}} alt=""/> */}
                  <Button
                    sx={{
                      my: 2,
                      color: changeStyles ? "#fff" : "#0060a6",
                      display: "block",
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                      width: "max-content ",
                    }}
                  >
                    <FormattedMessage
                      id="nav.item1"
                      defaultMessage="nosotros"
                    />
                    <Divider
                      sx={{
                        backgroundColor: "#EB783E",
                        visibility:
                          location.pathname === "/about-us" && activeSection !== "contact" ? "visible" : "hidden",
                      }}
                    />
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <img src="/icons/Forma E.png"  style={{width:anchoViewport*0.0119047619, height:anchoViewport*0.0052910053, visibility:activeSection === "contact"?"visible":"hidden"}} alt=""/> */}
                  <Button
                    onClick={scrollToContact}
                    // location.pathname === "/about-us"?navigate(-1) contact():contact()}
                    sx={{
                      my: 2,
                      color: changeStyles ? "#fff" : "#0060a6",
                      display: "block",
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700,
                    }}
                  >
                    <FormattedMessage
                      id="nav.item3"
                      defaultMessage="contacto"
                    />
                    <Divider
                      sx={{
                        backgroundColor: "#EB783E",
                        visibility:
                          activeSection === "contact" ? "visible" : "hidden",
                      }}
                    />
                  </Button>
                </Box>
                <Box sx={{ visibility: { xs: "hidden", md: "visible" } }}>
                  <Tooltip
                    title={
                      <FormattedMessage
                        id="nav.item4"
                        defaultMessage="idioma"
                      />
                    }
                  >
                    <Button
                      onClick={handleClick}
                      sx={{
                        my: 2,
                        color: changeStyles ? "#fff" : "#0060a6",
                        display: "block",
                        fontFamily: "Source Sans Pro, sans-serif",
                        fontSize: "18px",
                        fontWeight: 700,
                      }}
                    >
                      {/* {language.slice(0, 2)} */}
                      {locale.slice(0, 2)}
                      {/* <FormattedMessage id="nav.item" defaultMessage="idioma" /> */}
                    </Button>
                  </Tooltip>
                  <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="composition-button"
                    disableScrollLock={true}
                    anchorEl={anchorLang}
                    open={open}
                    onClose={(e) => handleClose(e)}
                    transformOrigin={{ horizontal: "center", vertical: "top" }}
                    anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
                  >
                    <MenuItem
                      sx={{
                        "&.Mui-selected": {
                          backgroundColor: "rgb(0, 96, 166, .5)",
                        },
                      }}
                      value="en-US"
                      selected={locale === "en-US" ? true : false}
                      onClick={(e) => handleClose(e)}
                    >
                      EN
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&.Mui-selected": {
                          backgroundColor: "rgb(0, 96, 166, .5)",
                        },
                      }}
                      value="es-ES"
                      selected={locale === "es-ES" ? true : false}
                      onClick={(e) => handleClose(e)}
                    >
                      ES
                    </MenuItem>
                    <MenuItem
                      sx={{
                        "&.Mui-selected": {
                          backgroundColor: "rgb(0, 96, 166, .5)",
                        },
                      }}
                      value="br-BR"
                      selected={locale === "br-BR" ? true : false}
                      onClick={(e) => handleClose(e)}
                    >
                      PT
                    </MenuItem>
                  </Menu>
                  {/* <ToggleButtonGroup
                  sx={{
                    ".css-d9c359-MuiButtonBase-root-MuiToggleButton-root": {
                      padding: "3px",
                      border: changeStyles?"1px solid #fff":"1px solid #0060a6",
                      color: changeStyles ? "#fff" : null,
                      fontFamily: "Source Sans Pro, sans-serif",
                    },
                    ".css-d9c359-MuiButtonBase-root-MuiToggleButton-root.Mui-selected": {color:'#FC7028', backgroundColor:"rgb(191, 191, 191, .3)"}
                  }}
                  color="primary"
                  value={language}
                  exclusive
                  onChange={handleChange}
                  aria-label="Platform"
                >
                  <ToggleButton value="en-US">EN</ToggleButton>
                  <ToggleButton value="es-ES">ES</ToggleButton>
                  <ToggleButton value="br-BR">BR</ToggleButton>
                </ToggleButtonGroup> */}
                </Box>
              </Box>

              {/*debe ser toggle */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
