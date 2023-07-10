"use strict";
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 8614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ SendEmail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1481);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);
([_firebase__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function SendEmail(nombre, apellido, email, texto) {
    const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, "everseek-web", "data", "emails");
    const emailContent = {
        pass: "wof3000",
        message: {
            header: "Comentarios de pagina web Everseek.io",
            human_being: `${"Comentario de: " + nombre + " " + apellido}`,
            mail: `${email}`,
            text: `${texto}`
        }
    };
    try {
        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(collectionRef, emailContent);
        return docRef;
    } catch (error) {
        console.error("Error adding email document: ", error);
        throw error;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1481:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   db: () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const firebaseConfig = {
    apiKey: "AIzaSyBm-WgfJkv1AUi92PRr3tAo0pVSDH9xqpA",
    authDomain: "everseek-core.firebaseapp.com",
    projectId: "everseek-core",
    storageBucket: "everseek-core.appspot.com",
    messagingSenderId: "742556080815",
    appId: "1:742556080815:web:cfd070bd151ef9574dd25a",
    measurementId: "G-CZ5LVGFG87"
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9943:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SendEmail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8614);
/* harmony import */ var _mui_icons_material_MarkEmailRead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1210);
/* harmony import */ var _mui_icons_material_MarkEmailRead__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_MarkEmailRead__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9648);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4661);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SendEmail__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_6__]);
([_SendEmail__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function ContactUs({ nav }) {
    const [contactForm, setContactForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const [isValidEmail, setIsValidEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [sendedMessage, setSendedMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const refBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [anchoViewport, setAnchoViewport] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, []);
    let location = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const navigateTo = (path)=>{
        location.push(path);
    };
    const SendedMessage = ()=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            height: refBox?.current?.clientHeight - 17,
            gap: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    height: "80px",
                    width: "80px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_MarkEmailRead__WEBPACK_IMPORTED_MODULE_5___default()), {
                        sx: {
                            fontSize: "80px",
                            color: "#fff"
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "h2",
                    fontFamily: "Open Sans, sans serif",
                    fontSize: "30px",
                    fontWeight: 500,
                    color: "#fff",
                    lineHeight: 1.3,
                    letterSpacing: 2,
                    marginBottom: "20px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                        id: "contact.item8",
                        defaultMessage: "contact success",
                        values: {
                            br: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                    variant: "span",
                    fontSize: "15px",
                    fontFamily: "Open Sans, sans serif",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1.3,
                    letterSpacing: 1,
                    textAlign: "center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                        id: "contact.item9",
                        defaultMessage: "contact successMessage",
                        values: {
                            br: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        }
                    })
                })
            ]
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (isValidEmail) {
            //enviar a api rest
            try {
                const res = await axios__WEBPACK_IMPORTED_MODULE_6__["default"].post("https://us-central1-everseek-core.cloudfunctions.net/Send_email_to_everseek", JSON.stringify(contactForm));
                if (res.status === 200) {
                    (0,_SendEmail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(contactForm.nombre, contactForm.last_name, contactForm.email, contactForm.mensaje);
                    setSendedMessage(true);
                } else {
                    alert("error");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Error al realizar la solicitud");
            }
        } else {
            alert("Correo Electr\xf3nico no v\xe1lido");
        }
    };
    const handleInputChange = (e)=>{
        if (e.target.name === "email") {
            const email = e.target.value;
            if (email.includes("@") && email.includes(".")) {
                setIsValidEmail(true);
            } else {
                setIsValidEmail(false);
            }
        }
        setContactForm({
            ...contactForm,
            [e.target.name]: e.target.value
        });
    };
    if (anchoViewport < 550) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                backgroundColor: "#06293F",
                paddingX: "15px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                        sx: {
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: `clamp(30px,${anchoViewport * 0.026455026}px,40px)`,
                            fontFamily: "Source Sans Pro, sans serif",
                            lineHeight: "1.2",
                            marginY: "20px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                            id: "contact.item1"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    ref: refBox,
                    item: true,
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                sx: {
                                    display: "flex",
                                    my: "0px",
                                    justifyContent: "space-around"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        sx: {
                                            color: "#fff",
                                            fontSize: "16px",
                                            fontFamily: "Open Sans, sans serif"
                                        },
                                        children: "info@everseek.io"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://www.linkedin.com/company/everseek",
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/assets/linkedin.png",
                                            alt: "linkedin",
                                            style: {
                                                width: "30px"
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                sx: {
                                    color: "#fff",
                                    fontSize: "16px",
                                    fontFamily: "Open Sans, sans serif",
                                    width: "100%",
                                    marginBottom: "20px",
                                    textAlign: "justify"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                        id: "contact.item2"
                                    }),
                                    "."
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    item: true,
                    children: sendedMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SendedMessage, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                gap: 1,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        sx: {
                                            display: "flex",
                                            marginBottom: "10px"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                fullWidth: true,
                                                name: "nombre",
                                                type: "text",
                                                variant: "filled",
                                                onChange: handleInputChange,
                                                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                    id: "contact.item3",
                                                    defaultMessage: "name"
                                                }),
                                                InputProps: {
                                                    disableUnderline: true,
                                                    sx: {
                                                        backgroundColor: "#fff !important",
                                                        borderRadius: "10px",
                                                        ":focus-visible": {
                                                            outline: "none"
                                                        },
                                                        ":hover": {
                                                            backgroundColor: "#fff !important"
                                                        },
                                                        "&:not(.Mui-focused)": {
                                                            backgroundColor: "#fff !important"
                                                        }
                                                    }
                                                },
                                                sx: {
                                                    "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input": {
                                                        backgroundColor: "#fff"
                                                    },
                                                    ".MuiInputBase-input.MuiFilledInput-input": {
                                                        fontFamily: "Open Sans, sans serif !important",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px"
                                                    },
                                                    ".MuiInputLabel-root": {
                                                        color: "#9a9a9b",
                                                        fontFamily: "Open Sans, sans serif !important"
                                                    },
                                                    marginRight: "5px",
                                                    color: "#fff !important",
                                                    ".MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#fff !important",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px"
                                                    }
                                                },
                                                required: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                fullWidth: true,
                                                name: "last_name",
                                                type: "text",
                                                variant: "filled",
                                                onChange: handleInputChange,
                                                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                    id: "contact.item4",
                                                    defaultMessage: "last name"
                                                }),
                                                InputProps: {
                                                    disableUnderline: true,
                                                    sx: {
                                                        backgroundColor: "#fff !important",
                                                        borderRadius: "10px",
                                                        ":focus-visible": {
                                                            outline: "none"
                                                        },
                                                        ":hover": {
                                                            backgroundColor: "#fff !important"
                                                        },
                                                        "&:not(.Mui-focused)": {
                                                            backgroundColor: "#fff !important"
                                                        }
                                                    }
                                                },
                                                sx: {
                                                    "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input": {
                                                        backgroundColor: "#fff"
                                                    },
                                                    ".MuiInputBase-input-MuiFilledInput-input": {
                                                        fontFamily: "Open Sans, sans serif !important",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px"
                                                    },
                                                    ".MuiInputLabel-root": {
                                                        color: "#9a9a9b",
                                                        fontFamily: "Open Sans, sans serif !important"
                                                    },
                                                    marginRight: "5px",
                                                    color: "#fff !important",
                                                    ".MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#fff !important",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px"
                                                    }
                                                },
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        name: "email",
                                        type: "text",
                                        variant: "filled",
                                        onError: ()=>isValidEmail ? false : true,
                                        helperText: isValidEmail ? "" : "Correo no valido",
                                        onChange: handleInputChange,
                                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "contact.item7",
                                            defaultMessage: "email"
                                        }),
                                        InputProps: {
                                            disableUnderline: true,
                                            sx: {
                                                backgroundColor: "#fff !important",
                                                borderRadius: "10px",
                                                ":focus-visible": {
                                                    outline: "none"
                                                },
                                                ":hover": {
                                                    backgroundColor: "#fff !important"
                                                },
                                                "&:not(.Mui-focused)": {
                                                    backgroundColor: "#fff !important"
                                                }
                                            }
                                        },
                                        sx: {
                                            marginBottom: "10px",
                                            "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input": {
                                                backgroundColor: "#fff"
                                            },
                                            ".MuiInputBase-input-MuiFilledInput-input": {
                                                fontFamily: "Open Sans, sans serif !important",
                                                backgroundColor: "#fff",
                                                borderRadius: "10px"
                                            },
                                            ".MuiInputLabel-root": {
                                                color: "#9a9a9b",
                                                fontFamily: "Open Sans, sans serif !important"
                                            },
                                            marginRight: "5px",
                                            color: "#fff !important",
                                            ".MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#fff !important",
                                                backgroundColor: "#fff",
                                                borderRadius: "10px"
                                            },
                                            ".MuiFormHelperText-root": {
                                                color: "#fff !important"
                                            }
                                        },
                                        required: true
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                        name: "mensaje",
                                        type: "text",
                                        variant: "filled",
                                        minRows: 5,
                                        maxRows: 7,
                                        onChange: handleInputChange,
                                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "contact.item5",
                                            defaultMessage: "message"
                                        }),
                                        multiline: true,
                                        InputProps: {
                                            disableUnderline: true,
                                            sx: {
                                                backgroundColor: "#fff !important",
                                                borderRadius: "10px",
                                                ":focus-visible": {
                                                    outline: "none"
                                                },
                                                ":hover": {
                                                    backgroundColor: "#fff !important"
                                                },
                                                "&:not(.Mui-focused)": {
                                                    backgroundColor: "#fff !important"
                                                }
                                            }
                                        },
                                        InputLabelProps: {
                                            sx: {
                                                color: "#06293F"
                                            }
                                        },
                                        sx: {
                                            marginBottom: "10px",
                                            "label[data-shrink=false]+.MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input": {
                                                backgroundColor: "#fff"
                                            },
                                            ".MuiInputBase-input.MuiFilledInput-input": {
                                                fontFamily: "Open Sans, sans serif !important",
                                                backgroundColor: "#fff !important",
                                                borderRadius: "10px"
                                            },
                                            ".MuiInputLabel-root": {
                                                color: "#9a9a9b",
                                                fontFamily: "Open Sans, sans serif !important"
                                            },
                                            marginRight: "5px",
                                            color: "#fff !important",
                                            ".MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#fff !important",
                                                backgroundColor: "#fff",
                                                borderRadius: "10px"
                                            }
                                        },
                                        required: true
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                    sx: {
                                        backgroundColor: "#fff",
                                        width: "160px",
                                        color: "#06293F",
                                        fontWeight: 600,
                                        fontFamily: "Source Sans Pro, sans-serif",
                                        textTransform: "initial",
                                        borderRadius: "20px",
                                        padding: "2px 20px",
                                        marginTop: "12px",
                                        fontSize: "14px",
                                        letterSpacing: 1,
                                        ":hover": {
                                            backgroundColor: "#fff",
                                            color: "#06293F"
                                        }
                                    },
                                    type: "Submit",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "contact.item6",
                                            defaultMessage: "submit"
                                        }),
                                        " "
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                    sx: {
                        backgroundColor: "#fff",
                        my: "30px"
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: {
                            xs: "center",
                            md: "space-between"
                        },
                        alignItems: "center",
                        paddingBottom: "30px"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        onClick: ()=>location.pathname === "/about-us" ? navigateTo("/") : nav(),
                        src: "/assets/Everseek-blanco.png",
                        alt: "logo",
                        style: {
                            width: "230px",
                            cursor: "pointer"
                        }
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
        sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "#06293F",
            paddingTop: "20px"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
            sx: {
                padding: {
                    xs: "20px 60px",
                    md: "90px 210px"
                }
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            ref: refBox,
                            item: true,
                            xs: 5,
                            sx: {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                        sx: {
                                            color: "#fff",
                                            fontWeight: 600,
                                            fontSize: `clamp(30px,${anchoViewport * 0.026455026}px,40px)`,
                                            fontFamily: "Source Sans Pro, sans serif",
                                            lineHeight: "1.2"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                            id: "contact.item1"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            sx: {
                                                color: "#fff",
                                                fontSize: "16px",
                                                fontFamily: "Open Sans, sans serif"
                                            },
                                            children: "info@everseek.io"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                            sx: {
                                                display: "flex",
                                                my: "30px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://www.linkedin.com/company/everseek",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/assets/linkedin.png",
                                                    alt: "linkedin",
                                                    style: {
                                                        width: "30px"
                                                    }
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                                            sx: {
                                                color: "#fff",
                                                fontSize: "16px",
                                                fontFamily: "Open Sans, sans serif",
                                                width: "70%",
                                                marginBottom: "20px"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                id: "contact.item2"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
                            item: true,
                            xs: 7,
                            children: sendedMessage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SendedMessage, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                                        gap: 1,
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                                sx: {
                                                    display: "flex",
                                                    marginBottom: "10px"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                        fullWidth: true,
                                                        name: "nombre",
                                                        type: "text",
                                                        variant: "filled",
                                                        onChange: handleInputChange,
                                                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                            id: "contact.item3",
                                                            defaultMessage: "name"
                                                        }),
                                                        InputProps: {
                                                            disableUnderline: true,
                                                            sx: {
                                                                backgroundColor: "#fff !important",
                                                                borderRadius: "10px",
                                                                ":focus-visible": {
                                                                    outline: "none"
                                                                },
                                                                ":hover": {
                                                                    backgroundColor: "#fff !important"
                                                                },
                                                                "&:not(.Mui-focused)": {
                                                                    backgroundColor: "#fff !important"
                                                                }
                                                            }
                                                        },
                                                        sx: {
                                                            "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input": {
                                                                backgroundColor: "#fff"
                                                            },
                                                            ".MuiInputBase-input.MuiFilledInput-input": {
                                                                fontFamily: "Open Sans, sans serif !important",
                                                                backgroundColor: "#fff",
                                                                borderRadius: "10px"
                                                            },
                                                            ".MuiInputLabel-root": {
                                                                color: "#9a9a9b",
                                                                fontFamily: "Open Sans, sans serif !important"
                                                            },
                                                            marginRight: "5px",
                                                            color: "#fff !important",
                                                            ".MuiOutlinedInput-notchedOutline": {
                                                                borderColor: "#fff !important",
                                                                backgroundColor: "#fff",
                                                                borderRadius: "10px"
                                                            }
                                                        },
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                        fullWidth: true,
                                                        name: "last_name",
                                                        type: "text",
                                                        variant: "filled",
                                                        onChange: handleInputChange,
                                                        label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                            id: "contact.item4",
                                                            defaultMessage: "last name"
                                                        }),
                                                        InputProps: {
                                                            disableUnderline: true,
                                                            sx: {
                                                                backgroundColor: "#fff !important",
                                                                borderRadius: "10px",
                                                                ":focus-visible": {
                                                                    outline: "none"
                                                                },
                                                                ":hover": {
                                                                    backgroundColor: "#fff !important"
                                                                },
                                                                "&:not(.Mui-focused)": {
                                                                    backgroundColor: "#fff !important"
                                                                }
                                                            }
                                                        },
                                                        sx: {
                                                            "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input": {
                                                                backgroundColor: "#fff"
                                                            },
                                                            ".MuiInputBase-input-MuiFilledInput-input": {
                                                                fontFamily: "Open Sans, sans serif !important",
                                                                backgroundColor: "#fff",
                                                                borderRadius: "10px"
                                                            },
                                                            ".MuiInputLabel-root": {
                                                                color: "#9a9a9b",
                                                                fontFamily: "Open Sans, sans serif !important"
                                                            },
                                                            marginRight: "5px",
                                                            color: "#fff !important",
                                                            ".MuiOutlinedInput-notchedOutline": {
                                                                borderColor: "#fff !important",
                                                                backgroundColor: "#fff",
                                                                borderRadius: "10px"
                                                            }
                                                        },
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                name: "email",
                                                type: "text",
                                                variant: "filled",
                                                onError: ()=>isValidEmail ? false : true,
                                                helperText: isValidEmail ? "" : "Correo no valido",
                                                onChange: handleInputChange,
                                                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                    id: "contact.item7",
                                                    defaultMessage: "email"
                                                }),
                                                InputProps: {
                                                    disableUnderline: true,
                                                    sx: {
                                                        backgroundColor: "#fff !important",
                                                        borderRadius: "10px",
                                                        ":focus-visible": {
                                                            outline: "none"
                                                        },
                                                        ":hover": {
                                                            backgroundColor: "#fff !important"
                                                        },
                                                        "&:not(.Mui-focused)": {
                                                            backgroundColor: "#fff !important"
                                                        }
                                                    }
                                                },
                                                sx: {
                                                    marginBottom: "10px",
                                                    "label[data-shrink=false]+.MuiInputBase-formControl .MuiInputBase-input-MuiFilledInput-input": {
                                                        backgroundColor: "#fff"
                                                    },
                                                    ".MuiInputBase-input-MuiFilledInput-input": {
                                                        fontFamily: "Open Sans, sans serif !important",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px"
                                                    },
                                                    ".MuiInputLabel-root": {
                                                        color: "#9a9a9b",
                                                        fontFamily: "Open Sans, sans serif !important"
                                                    },
                                                    marginRight: "5px",
                                                    color: "#fff !important",
                                                    ".MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#fff !important",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px"
                                                    },
                                                    ".MuiFormHelperText-root": {
                                                        color: "#fff !important"
                                                    }
                                                },
                                                required: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.TextField, {
                                                name: "mensaje",
                                                type: "text",
                                                variant: "filled",
                                                minRows: 5,
                                                maxRows: 7,
                                                onChange: handleInputChange,
                                                label: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                    id: "contact.item5",
                                                    defaultMessage: "message"
                                                }),
                                                multiline: true,
                                                InputProps: {
                                                    disableUnderline: true,
                                                    sx: {
                                                        backgroundColor: "#fff !important",
                                                        borderRadius: "10px",
                                                        ":focus-visible": {
                                                            outline: "none"
                                                        },
                                                        ":hover": {
                                                            backgroundColor: "#fff !important"
                                                        },
                                                        "&:not(.Mui-focused)": {
                                                            backgroundColor: "#fff !important"
                                                        }
                                                    }
                                                },
                                                InputLabelProps: {
                                                    sx: {
                                                        color: "#06293F"
                                                    }
                                                },
                                                sx: {
                                                    marginBottom: "10px",
                                                    "label[data-shrink=false]+.MuiInputBase-formControl .css-10botns-MuiInputBase-input-MuiFilledInput-input": {
                                                        backgroundColor: "#fff"
                                                    },
                                                    ".MuiInputBase-input.MuiFilledInput-input": {
                                                        fontFamily: "Open Sans, sans serif !important",
                                                        backgroundColor: "#fff !important",
                                                        borderRadius: "10px"
                                                    },
                                                    ".MuiInputLabel-root": {
                                                        color: "#9a9a9b",
                                                        fontFamily: "Open Sans, sans serif !important"
                                                    },
                                                    marginRight: "5px",
                                                    color: "#fff !important",
                                                    ".MuiOutlinedInput-notchedOutline": {
                                                        borderColor: "#fff !important",
                                                        backgroundColor: "#fff",
                                                        borderRadius: "10px"
                                                    }
                                                },
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "start"
                                        },
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                            sx: {
                                                backgroundColor: "#fff",
                                                width: "160px",
                                                color: "#06293F",
                                                fontWeight: 600,
                                                fontFamily: "Source Sans Pro, sans-serif",
                                                textTransform: "initial",
                                                borderRadius: "20px",
                                                padding: "2px 20px",
                                                marginTop: "12px",
                                                fontSize: "14px",
                                                letterSpacing: 1,
                                                ":hover": {
                                                    backgroundColor: "#fff",
                                                    color: "#06293F"
                                                }
                                            },
                                            type: "Submit",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, {
                                                    id: "contact.item6",
                                                    defaultMessage: "submit"
                                                }),
                                                " "
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Divider, {
                    sx: {
                        backgroundColor: "#fff",
                        my: "70px"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    sx: {
                        display: "flex",
                        justifyContent: {
                            xs: "center",
                            md: "space-between"
                        },
                        alignItems: "center",
                        marginTop: "-20px"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            onClick: ()=>location.pathname === "/about-us" ? navigateTo("/") : nav(),
                            src: "/assets/Everseek-blanco.png",
                            alt: "logo",
                            style: {
                                width: "230px",
                                cursor: "pointer"
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {
                            sx: {
                                display: {
                                    xs: "none",
                                    md: "flex"
                                },
                                color: "#fff",
                                fontFamily: "Open Sans"
                            },
                            children: "EVERSEEK.IO | Privacy Policy"
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;