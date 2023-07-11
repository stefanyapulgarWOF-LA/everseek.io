"use strict";
exports.id = 715;
exports.ids = [715];
exports.modules = {

/***/ 1715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainImage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);



/**
 * Componente que contiene la imagen principal
 * @returns
 */



function MainImage({
  service,
  anchoViewport,
  src
}) {
  const {
    0: videoLoaded,
    1: setVideoLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: videoHeight,
    1: setVideoHeight
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(200);
  const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // const handleImageLoad = () => {
    const height = imageRef?.current?.offsetHeight;
    setVideoHeight(height); // };
    // if (typeof window !== 'undefined' && imageRef.current) {
    //   imageRef.current.addEventListener('load', handleImageLoad);
    // }
    // return () => {
    //   if (typeof window !== 'undefined' && imageRef.current) {
    //     imageRef.current.removeEventListener('load', handleImageLoad);
    //   }
    // };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
    sx: {
      width: "100%",
      height: {
        xs: videoHeight + 70,
        md: videoHeight
      }
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
      ref: imageRef,
      src: src,
      alt: "img-principal",
      style: {
        width: "100%",
        position: "absolute",
        zIndex: "-1",
        top: 55
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
      sx: {
        paddingLeft: anchoViewport * 0.0066137566,
        paddingTop: {
          xs: anchoViewport * 0.013227513 + 5,
          md: anchoViewport * 0.013227513
        }
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
        sx: {
          fontFamily: "Source Sans Pro, sans-serif",
          fontWeight: 600,
          fontSize: `clamp(22px,${anchoViewport * 0.03306878306878307}px,50px)`,
          color: "#fff",
          lineHeight: "1.2"
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__.FormattedMessage, {
          id: "main.item0",
          defaultMessage: "title",
          values: {
            br: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {})
          }
        })
      })
    })]
  });
}

/***/ })

};
;