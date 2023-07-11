"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 3061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Services)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9233);
/* harmony import */ var _mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);







const steps = ["Select campaign settings", "Create an ad group", "Create an ad"];
const services = [{
  title: "services.item2",
  description: "services.item6",
  img: "/assets/Imagen-principal.png"
}, {
  title: "services.item10",
  description: "services.item11",
  img: "/assets/Imagen-principal.png"
}, {
  title: "services.item3",
  description: "services.item7"
}, {
  title: "services.item5",
  description: "services.item9"
}, {
  title: "services.item4",
  description: "services.item8"
}];
function Services({
  anchoViewport
}) {
  const [activeStep, setActiveStep] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(0);
  const [completed, setCompleted] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep = isLastStep() && !allStepsCompleted() ? // It's the last step, but not all steps have been completed,
    // find the first step that has been completed
    steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    setActiveStep(step);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      margin: {
        md: "50px 230px"
      }
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        display: "flex",
        justifyContent: "center",
        paddingTop: "20px",
        marginBottom: "50px"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        sx: {
          width: {
            xs: "90%",
            md: "70%"
          },
          fontFamily: "Open Sans",
          fontSize: `clamp(16px,${anchoViewport * 0.0165343915}px,25px)`,
          textAlign: "center",
          color: "#05293f",
          fontWeight: 300
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "main.item2",
          defaultMessage: "text"
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        display: "flex",
        alignItems: "center",
        marginBottom: "30px",
        justifyContent: {
          xs: "center",
          md: "flex-start"
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        sx: {
          fontFamily: "Source Sans Pro, sans serif",
          color: "#0060a6",
          fontWeight: 600,
          fontSize: `clamp(30px,${anchoViewport * 0.026455026}px,40px)`,
          marginRight: "13px",
          marginLeft: {
            xs: "6px",
            md: "-6px"
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "services.item0",
          defaultMessage: "elev"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        sx: {
          fontFamily: "Source Sans Pro, sans serif",
          color: "#FC7128",
          fontWeight: 600,
          fontSize: `clamp(30px,${anchoViewport * 0.026455026}px,40px)`
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "services.item1",
          defaultMessage: "services"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        marginBottom: "25px",
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        sx: {
          fontFamily: "Open Sans, sans serif",
          color: "#05293f",
          fontSize: `clamp(16px,${anchoViewport * 0.0119047619}px,20px)`,
          fontWeight: 300,
          marginX: {
            xs: "10px"
          },
          textAlign: {
            xs: "center",
            md: 'inherit'
          },
          width: {
            md: "96.5%"
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "services.subtitulo",
          defaultMessage: "services",
          values: {
            br: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {})
          }
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        width: "100%",
        marginLeft: "12px",
        backgroundColor: ""
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stepper, {
        nonLinear: true,
        activeStep: activeStep,
        orientation: "vertical",
        sx: {
          ".MuiStepConnector-line": {
            borderColor: "#0060a6 !important",
            height: "75px !important",
            position: "absolute !important",
            marginTop: {
              xs: "-25px !important",
              md: "-20px !important"
            },
            marginLeft: "-4px !important",
            zIndex: "-1 !important"
          },
          ".MuiStepContent-root": {
            borderLeft: " 1px solid #0060a6 !important",
            marginTop: activeStep === 0 ? "-20px !important" : null,
            marginLeft: "8px !important"
          },
          ".MuiStepLabel-iconContainer": {
            width: "25px"
          }
        },
        children: services.map((label, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Step, {
          completed: completed[index],
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.StepButton, {
            color: "inherit",
            onClick: handleStep(index),
            TouchRippleProps: {
              classes: {
                rippleVisible: "MuiTouchRipple-root-visible",
                child: "MuiTouchRipple-child"
              }
            },
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((_mui_icons_material_Circle__WEBPACK_IMPORTED_MODULE_3___default()), {
              sx: {
                color: "#F3632E",
                position: "relative",
                top: "2px",
                width: "100%",
                display: "flex",
                justifyContent: "center"
              }
            }),
            sx: {
              "&:focus": {
                outline: "none !important",
                backgroundColor: "transparent !important"
              },
              "&.Mui-active": {
                backgroundColor: "transparent !important"
              },
              ".MuiTouchRipple-root-visible": {
                backgroundColor: "transparent !important",
                opacity: "0 !important"
              },
              ".MuiTouchRipple-child": {
                backgroundColor: "transparent !important",
                display: "none !important"
              },
              ".MuiSvgIcon-root.MuiStepIcon-root.Mui-active": {
                color: "transparent !important",
                backgroundColor: "transparent !important"
              },
              ".MuiSvgIcon-root.MuiStepIcon-root": {
                color: "transparent !important",
                backgroundColor: "transparent !important"
              },
              ".MuiSvgIcon-root": {
                height: "0.8rem"
              }
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
              sx: {
                fontFamily: "Source Sans Pro, sans serif",
                color: "#0060a6",
                fontWeight: 600,
                fontSize: `clamp(20px,${anchoViewport * 0.0165343915}px,25px)`,
                marginLeft: "20px"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                id: label.title,
                defaultMessage: "color"
              }, label)
            })
          }), activeStep === index ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.StepContent, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                sx: {
                  display: "flex",
                  flexDirection: {
                    xs: 'column',
                    md: 'row'
                  },
                  justifyContent: "space-between",
                  alignItems: "center"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                    sx: {
                      mt: 2,
                      mb: 1,
                      py: 1,
                      width: {
                        md: "550px"
                      },
                      fontFamily: "Open Sans, sans serif",
                      color: "#05293f",
                      fontSize: `clamp(16px,${anchoViewport * 0.0119047619}px,18px)`,
                      marginLeft: "20px",
                      fontWeight: 300
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
                      id: label.description,
                      defaultMessage: "color",
                      values: {
                        a: link => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
                          href: "https://www.firehawkdetection.com/",
                          target: "_blank",
                          rel: "noreferrer",
                          style: {
                            fontWeight: 600,
                            color: "#0060a6"
                          },
                          children: link
                        })
                      }
                    }, label)
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                  sx: {
                    display: "flex",
                    justifyContent: "center"
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("video", {
                    autoPlay: true // loop
                    ,
                    muted: true,
                    src: `/assets/0${index + 1}.mp4`,
                    alt: "",
                    style: {
                      width: "95%",
                      maxHeight: "130px"
                    }
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("source", {
                    src: `/assets/0${index + 1}.mp4`,
                    type: "video/mp4"
                  })]
                })]
              })
            })
          }) : null]
        }, index))
      })
    })]
  });
}

/***/ })

};
;