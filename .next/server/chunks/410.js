"use strict";
exports.id = 410;
exports.ids = [410];
exports.modules = {

/***/ 8410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3365);
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Lang_LangProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5994);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Context_AllContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(774);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5893);
 // import { Link } from "react-router-dom";







/**
 * Componente que contiene el menu de navegación
 * @returns
 */



function NavBar({
  service,
  contact,
  setNavBarHeight,
  anchoViewport,
  // activeSection,
  nav
}) {
  const {
    switchLanguage,
    locale
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Lang_LangProvider__WEBPACK_IMPORTED_MODULE_3__/* .langContext */ .Af);
  const {
    refContact,
    setRefContact,
    refServices,
    setRefServices,
    setChangePage,
    refAbout,
    setAboutRef,
    changePageToAbout,
    setChangePageToAbout,
    activeSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Context_AllContext__WEBPACK_IMPORTED_MODULE_5__/* .AllContext */ .y$);
  const {
    0: anchorElNav,
    1: setAnchorElNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: changeStyles,
    1: setChangeStyles
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: colorNav,
    1: setColorNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("#fff");
  const {
    0: anchorLang,
    1: setAnchorLang
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const location = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const open = Boolean(anchorLang);
  let refApp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const navigateTo = path => {
    location.push(path);
  };

  const handleClick = event => {
    setAnchorLang(event.currentTarget);
  };

  const handleClose = e => {
    console.log(e);

    if (e.target.outerText === "EN") {
      switchLanguage("en-US");
    } else if (e.target.outerText === "ES") {
      switchLanguage("es-ES");
    } else if (e.target.outerText === "PT") {
      switchLanguage("pt-BR");
    }

    setAnchorLang(null);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, [activeSection]);

  const handleCloseNavMenu = e => {
    setAnchorElNav(null);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setNavBarHeight(refApp.current.offsetHeight);
  }, [refApp.current]);

  const scrollToContact = () => {
    refContact?.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToServices = () => {
    refServices?.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToAbout = () => {
    refAbout?.current?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const handleSectionClick = () => {
    handleCloseNavMenu();

    if (location.pathname === "/about-us") {
      setChangePage(true);
      navigateTo("/");
    } else if (location.pathname === "/") {
      setChangePageToAbout(true);
      navigateTo("/about-us");
    } else {// scrollToContact();
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.AppBar, {
      ref: refApp,
      position: "fixed",
      sx: {
        // backgroundColor: changeStyles ? "#07293F" : "#fff",
        backgroundColor: colorNav,
        boxShadow: "none",
        borderBottom: {
          xs: "none",
          md: changeStyles ? "none" : "1px solid #b3b3b3"
        },
        transition: changeStyles ? "background-color .5s" : null
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Container, {
        maxWidth: false,
        sx: {
          "&.MuiContainer-root": {
            padding: "0 !important"
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Toolbar, {
          disableGutters: true,
          sx: {
            justifyContent: {
              xs: "none",
              md: "none"
            }
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
              display: {
                xs: "flex",
                md: "none"
              }
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
              size: "large",
              "aria-label": "account of current user",
              "aria-controls": "menu-appbar",
              "aria-haspopup": "true",
              onClick: handleOpenNavMenu,
              color: "inherit",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default()), {
                sx: {
                  color: changeStyles ? "#fff" : "#0060a6"
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Menu, {
              id: "menu-appbar",
              anchorEl: anchorElNav,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              keepMounted: true,
              transformOrigin: {
                vertical: "top",
                horizontal: "left"
              },
              open: Boolean(anchorElNav),
              onClose: handleCloseNavMenu,
              sx: {
                display: {
                  xs: "block",
                  md: "none"
                }
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                value: "services" // component={Link}
                // to="/"
                ,
                onClick: e => {
                  setChangePage(true);
                  navigateTo("/");
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                  textAlign: "center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "nav.item2",
                    defaultMessage: "experiencia"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem // component={Link}
              // to="/about-us"
              , {
                onClick: () => {
                  setChangePageToAbout(true);
                  navigateTo("/about-us");
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                  textAlign: "center",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "nav.item1",
                    defaultMessage: "nosotros"
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                  display: "flex",
                  justifyContent: "center"
                }
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box // onClick={nav}
          // component={Link}
          // to="/"
          , {
            sx: {
              marginLeft: {
                md: "60px"
              },
              marginY: {
                md: "12px"
              },
              width: "300px",
              cursor: "pointer",
              display: {
                xs: "flex",
                md: "inline"
              },
              justifyContent: {
                xs: "center"
              }
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
              src: changeStyles ? "/assets/Everseek-blanco.png" : "/assets/Everseek-azul.png",
              alt: "logo",
              style: {
                width: "100%",
                transition: "opacity 0.5s"
              }
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
            sx: {
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex"
              },
              width: "100%",
              justifyContent: "end",
              alignItems: "center"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
              sx: {
                display: "flex",
                width: "55%",
                justifyContent: "space-around"
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  onClick: () => location.pathname === "/about-us" ? handleSectionClick() : scrollToServices(),
                  sx: {
                    my: 2,
                    color: changeStyles ? "#fff" : "#0060a6",
                    display: "block",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "nav.item2",
                    defaultMessage: "experiencia"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    sx: {
                      backgroundColor: "#EB783E",
                      opacity: 1,
                      visibility: activeSection === "services" ? "visible" : "hidden"
                    }
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box // component={Link}
              // to="/about-us"
              , {
                onClick: () => {
                  location.pathname === "/" ? handleSectionClick() : scrollToAbout();
                },
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textDecoration: "none"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  sx: {
                    my: 2,
                    color: changeStyles ? "#fff" : "#0060a6",
                    display: "block",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    width: "max-content "
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "nav.item1",
                    defaultMessage: "nosotros"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    sx: {
                      backgroundColor: "#EB783E",
                      opacity: 1,
                      visibility: location.pathname === "/about-us" && activeSection !== "contact" ? "visible" : "hidden"
                    }
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                  onClick: scrollToContact // location.pathname === "/about-us"?navigate(-1) contact():contact()}
                  ,
                  sx: {
                    my: 2,
                    color: changeStyles ? "#fff" : "#0060a6",
                    display: "block",
                    fontFamily: "Source Sans Pro, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "nav.item3",
                    defaultMessage: "contacto"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    sx: {
                      backgroundColor: "#EB783E",
                      opacity: 1,
                      visibility: activeSection === "contact" ? "visible" : "hidden"
                    }
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                  visibility: {
                    xs: "hidden",
                    md: "visible"
                  }
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
                  title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, {
                    id: "nav.item4",
                    defaultMessage: "idioma"
                  }),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                    onClick: handleClick,
                    sx: {
                      my: 2,
                      color: changeStyles ? "#fff" : "#0060a6",
                      display: "block",
                      fontFamily: "Source Sans Pro, sans-serif",
                      fontSize: "18px",
                      fontWeight: 700
                    },
                    children: locale.slice(0, 2)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                  id: "demo-positioned-menu",
                  "aria-labelledby": "composition-button",
                  disableScrollLock: true,
                  anchorEl: anchorLang,
                  open: open,
                  onClose: e => handleClose(e),
                  transformOrigin: {
                    horizontal: "center",
                    vertical: "top"
                  },
                  anchorOrigin: {
                    horizontal: "center",
                    vertical: "bottom"
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                    sx: {
                      "&.Mui-selected": {
                        backgroundColor: "rgb(0, 96, 166, .5)"
                      }
                    },
                    value: "en-US",
                    selected: locale === "en-US" ? true : false,
                    onClick: e => handleClose(e),
                    children: "EN"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                    sx: {
                      "&.Mui-selected": {
                        backgroundColor: "rgb(0, 96, 166, .5)"
                      }
                    },
                    value: "es-ES",
                    selected: locale === "es-ES" ? true : false,
                    onClick: e => handleClose(e),
                    children: "ES"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                    sx: {
                      "&.Mui-selected": {
                        backgroundColor: "rgb(0, 96, 166, .5)"
                      }
                    },
                    value: "br-BR",
                    selected: locale === "br-BR" ? true : false,
                    onClick: e => handleClose(e),
                    children: "PT"
                  })]
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

/***/ })

};
;