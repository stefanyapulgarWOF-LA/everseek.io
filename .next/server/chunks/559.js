"use strict";
exports.id = 559;
exports.ids = [559];
exports.modules = {

/***/ 7559:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7986);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);






function About({
  navBarHeight
}) {
  const {
    0: anchoViewport,
    1: setAnchoViewport
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (false) {}
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      margin: {
        xs: "none",
        md: '140px 220px'
      },
      display: {
        md: 'flex'
      },
      alignItems: 'center',
      marginTop: `${navBarHeight + 10}px`
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: {
          md: 'column'
        },
        alignItems: 'center',
        margin: {
          md: '50px 100px'
        },
        marginBottom: {
          xs: '10px'
        }
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
        src: "/assets/icono-06.svg",
        style: {
          width: anchoViewport * 0.0520833333
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {
        sx: {
          display: 'flex',
          marginLeft: {
            xs: '10px'
          }
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          sx: {
            fontFamily: "Source Sans Pro, sans serif",
            color: "#0060a6",
            fontWeight: 600,
            fontSize: `clamp(25px,${anchoViewport * 0.026455026}px,40px)`,
            marginRight: '10px'
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "about.item1",
            defaultMessage: "About us"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
          sx: {
            fontFamily: "Source Sans Pro, sans serif",
            color: "#FC7128",
            fontWeight: 600,
            fontSize: `clamp(25px,${anchoViewport * 0.026455026}px,40px)`
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
            id: "about.item2",
            defaultMessage: "About us"
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_system__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        marginBottom: {
          xs: '10px'
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_0__.Typography, {
        sx: {
          marginX: {
            xs: "20px",
            md: '60px'
          },
          textAlign: 'justify',
          color: "#0060a6",
          fontFamily: "Source Sans Pro, sans serif",
          fontSize: `clamp(14px,${anchoViewport * 0.0119047619}px,20px)`,
          fontWeight: 300
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "about.item3",
          defaultMessage: "text",
          values: {
            br: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}),
            b: chunks => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("strong", {
              children: chunks
            })
          }
        })
      })
    })]
  });
}

/***/ })

};
;