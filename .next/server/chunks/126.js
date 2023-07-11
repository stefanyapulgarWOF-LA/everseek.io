exports.id = 126;
exports.ids = [126];
exports.modules = {

/***/ 774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y$: () => (/* binding */ AllContext),
/* harmony export */   z1: () => (/* binding */ PageContext)
/* harmony export */ });
/* unused harmony export useAllContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);


const AllContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useAllContext() {
  return useContext(AllContext);
}

const PageContext = ({
  children
}) => {
  const {
    0: refContact,
    1: setRefContact
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: refServices,
    1: setRefServices
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: changePage,
    1: setChangePage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: changePageToAbout,
    1: setChangePageToAbout
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: activeSection,
    1: setActiveSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: refNav,
    1: setRefNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: refAbout,
    1: setRefAbout
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const handleScroll = sections => {
    const scrollPosition = window.pageYOffset;
    let currentSection = "";
    sections.forEach(section => {
      const sectionId = section.getAttribute("id");
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.pageYOffset >= sectionTop - sectionHeight / 2 && window.pageYOffset < sectionTop + sectionHeight) {
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
    setRefNav,
    refAbout,
    setRefAbout,
    changePageToAbout,
    setChangePageToAbout
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(AllContext.Provider, {
    value: value,
    children: children
  });
};



/***/ }),

/***/ 5994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ul: () => (/* binding */ LangProvider),
  Af: () => (/* binding */ langContext)
});

// UNUSED EXPORTS: useLang

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__(3126);
;// CONCATENATED MODULE: ./src/Lang/EN.json
const EN_namespaceObject = JSON.parse('{"mainImage.item1":"Revolutionizing <br /> the reality of <br /> detecting fires","nav.item1":"About us","nav.item2":"Innovative solutions","nav.item3":"Contact","nav.item4":"Change language","main.item0":"REAL-TIME {br}WILDFIRE {br}MANAGEMENT ","main.item1":"Learn more","main.item2":"Powered by tech, driven by people, we contribute to a safer & sustainable future by working to reduce the impact of wildfires.","services.subtitulo":"Real-time systems to prevent, detect and track the evolution of wildfires","services.item0":"Innovative","services.item1":"solutions","services.item2":"Risk Index","services.item3":"Wildfire Detection","services.item4":"Fire Evolution","services.item5":"Fire Spread Modeling","services.item6":"Advanced artificial intelligence algorithms combined with infield optical sensors, developed to predict the most vulnerable and high-risk areas for wildfires.","services.item7":"A revolutionary system of wildfire detection and notification in real time introduced by <a>Firehawk</a>, achieving an efficient and timely detection by combining human experience with AI.","services.item8":"We track fire behavior and provide critical information to firefighting teams and emergency services to help them contain and extinguish wildfires more effectively.","services.item9":"Projection of fire spread thanks to our advanced real-time data analysis system, providing essential information to support resource allocation, strategic decision making and community organisation.","services.item10":"Detection Networks Design","services.item11":"Topographical study, infrastructure and analysis of the most efficient and effective points where to implement early detection cameras.","contact.item1":"Contact Us","contact.item2":"Got any questions or would like to learn more, please send us a message and we will get back to you as soon as possiole","contact.item3":"First Name","contact.item4":"Last Name","contact.item5":"Leave us a message","contact.item6":"Submit","contact.item7":"Email","contact.item8":"Message sent!","contact.item9":"We will contact you {br} very soon...","about.item1":"About ","about.item2":"us","about.item3":"Founded in Chile in 2021 with the objective of furthering the development of algorithms and platforms for forest fire management. {br}Our team relies on experienced professionals from the fire sector and engineers and IT specialists. {br}{br} Our services are already operational in Argentina, Uruguay and Chile <b>-with more than 200 monitoring stations and 15 million hectares under surveillance-</b> offering our clients innovative solutions for better wildfire management."}');
;// CONCATENATED MODULE: ./src/Lang/ES.json
const ES_namespaceObject = JSON.parse('{"nav.item1":"Sobre nosotros","nav.item2":"Soluciones innovadoras","nav.item3":"Contacto","nav.item4":"Cambiar idioma","main.item0":"GESTIÓN DE {br}INCENDIOS FORESTALES {br}EN TIEMPO REAL","main.item1":"Aprende mas","main.item2":"Impulsados por la tecnología y las personas, contribuimos a un futuro más seguro y sostenible reduciendo el impacto de los incendios forestales.","services.subtitulo":"Sistemas en tiempo real para prevenir, detectar y rastrear la evolución de los incendios forestales","services.item0":"Soluciones","services.item1":"innovadoras","services.item2":"Índices de Peligro","services.item3":"Detección Incendios Forestales","services.item4":"Evolución Fuego","services.item5":"Propagación","services.item6":"Algoritmos avanzados de inteligencia artificial combinados con sensores ópticos en terreno, desarrollados para predecir áreas más vulnerables y con alto riesgo de incendios forestales.","services.item7":"Contamos con un revolucionario sistema de detección y notificación en tiempo real de incendios forestales de la mano de <a>Firehawk</a>, consiguiendo una detección eficiente y oportuna al combinar la experiencia humana con IA.","services.item8":"Rastreamos el comportamiento del fuego y proporcionamos información explícita a los equipos de brigadas forestales y servicios de emergencia para contribuir a la contención y extinción del fuego de forma más efectiva.","services.item9":"Proyección de la propagación del fuego gracias a nuestro avanzado sistema de análisis de datos en tiempo real, ofreciendo información esencial que respalda la distribución de recursos, la toma de decisiones estratégicas y la organización comunitaria.","services.item10":"Diseño Redes Detección","services.item11":"Estudio topográfico, infraestructura y análisis de los puntos más eficientes y eficaces implantar las cámaras de detección temprana.","contact.item1":"Contacto","contact.item2":"Si tiene alguna pregunta o desea obtener más información, envíenos un mensaje y nos pondremos en contacto con usted lo antes posible.","contact.item3":"Nombre","contact.item4":"Apellido","contact.item5":"Déjanos un mensaje","contact.item6":"Enviar","contact.item7":"Email","contact.item8":"¡Mensaje enviado!","contact.item9":"Nos contactaremos contigo {br} muy pronto...","about.item1":"Sobre","about.item2":"nosotros","about.item3":"Fundada en Chile en 2021 con el objetivo de avanzar en el desarrollo de algoritmos y plataformas de gestión contra incendios forestales. Contamos con un equipo compuesto por profesionales experimentados del sector de incendios e ingenieros y especialistas en tecnología de la información. {br}{br}Nuestros servicios ya están operativos en Argentina, Uruguay y Chile <b>-con más de 200 estaciones de monitoreo y 15 millones de hectáreas bajo vigilancia-</b> ofreciendo a nuestros clientes soluciones innovadoras para una mejor gestión de los incendios forestales."}');
;// CONCATENATED MODULE: ./src/Lang/BR.json
const BR_namespaceObject = JSON.parse('{"mainImage.item1":"Revolutionizing <br /> the reality of <br /> detecting fires","nav.item1":"SOBRE NÓS","nav.item2":"SOLUÇÕES INOVADORAS","nav.item3":"Contato","nav.item4":"Alterar idioma","main.item0":"GERENCIAMENTO DE{br} INCÊNDIOS FLORESTAIS{br} EM TEMPO REAL","main.item1":"Learn more","main.item2":"Impulsionados pela tecnologia e direcionados pelas pessoas, contribuímos para um futuro mais seguro e sustentável, trabalhando para reduzir o impacto dos incêndios florestais.","services.subtitulo":"Sistemas em tempo real para prevenir, detectar e acompanhar a evolução dos incêndios florestais","services.item0":"SOLUÇÕES","services.item1":"INOVADORAS","services.item2":"Índice de Risco","services.item3":"Detecção de incêndio florestal","services.item4":"Evolução do incêndio","services.item5":"Modelagem da propagação do fogo","services.item6":"Algoritmos avançados de inteligência artificial, combinados com sensores ópticos internos, desenvolvidos para prever as áreas mais vulneráveis e de alto risco para incêndios florestais.","services.item7":"Um sistema revolucionário de detecção e notificação de incêndios florestais em tempo real introduzido pela Firehawk, alcançando uma detecção eficiente e oportuna ao combinar a experiência humana com a IA.","services.item8":"Rastreamos o comportamento do fogo e fornecemos informações explícitas às equipes da brigada florestal e serviços de emergência para ajudar a conter e extinguir o fogo de forma mais eficaz.","services.item9":"Projeção da propagação do fogo graças ao nosso avançado sistema de análise de dados em tempo real, fornecendo informações essenciais para apoiar a alocação de recursos, tomada de decisões estratégicas e organização da comunidade.","services.item10":"Projeto de redes de detecção","services.item11":"Estudo topográfico, infraestrutura e análise dos pontos mais eficientes e eficazes onde implementar câmeras de detecção precoce.","contact.item1":"Fale Conosco","contact.item2":"Tem alguma dúvida ou gostaria de saber mais, envie-nos uma mensagem e responderemos o mais breve possível","contact.item3":"Nome","contact.item4":"Sobrenome","contact.item5":"Deixe-nos uma mensagem","contact.item6":"Enviar","contact.item7":"E-mail","contact.item8":"Mensagem enviada!","contact.item9":"Entraremos em contato com você {br} muito em breve...","about.item1":"SOBRE ","about.item2":"NÓS","about.item3":"Fundada no Chile em 2021 com o objetivo de promover o desenvolvimento de algoritmos e plataformas para gestão de incêndios florestais. {br} Nossa equipe conta com profissionais experientes do setor de incêndios e engenheiros e especialistas em TI. {br}{br} Nossos serviços já estão operando na Argentina, Uruguai e Chile <b>-com mais de 200 estações de monitoramento e 15 milhões de hectares sob vigilância-</b> oferecendo aos nossos clientes soluções inovadoras para uma melhor gestão de incêndios florestais."}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: ./src/Lang/LangProvider.jsx






const langContext = /*#__PURE__*/(0,external_react_.createContext)();
function useLang() {
  return useContext(langContext);
}

const LangProvider = ({
  children
}) => {
  const {
    0: messages,
    1: setMessages
  } = (0,external_react_.useState)(EN_namespaceObject);
  const {
    0: locale,
    1: setLocale
  } = (0,external_react_.useState)("en-US");

  const GetString = key => messages[key] ?? "Not key";

  const switchLanguage = lang => {
    console.log("🚀  lang:", lang);

    switch (lang) {
      case "es-ES":
        setMessages(ES_namespaceObject);
        setLocale("es-ES");
        break;

      case "en-US":
        setMessages(EN_namespaceObject);
        setLocale("en-US");
        break;

      case 'pt-BR':
        setMessages(BR_namespaceObject);
        setLocale('pt-BR');
        break;

      default:
        setMessages(EN_namespaceObject);
        setLocale("en-US");
        break;
    }
  };

  const value = {
    locale,
    switchLanguage,
    GetString
  };
  (0,external_react_.useEffect)(() => {
    const {
      language
    } = window.navigator;

    if (language === "es-ES" || language === "es-CL" || language === "es-MX") {
      setMessages(ES_namespaceObject);
      setLocale("es-ES");
    } else {
      setMessages(EN_namespaceObject);
      setLocale("en-US");
    }
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(langContext.Provider, {
    value: value,
    children: /*#__PURE__*/jsx_runtime.jsx(external_react_intl_.IntlProvider, {
      locale: locale,
      messages: messages,
      children: children
    })
  });
};



/***/ }),

/***/ 4126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Lang_LangProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5994);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context_AllContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(774);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4178);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  console.log('en app'); // const Wrapper = ({ children }) => {
  //   const location = useLocation();
  //   useLayoutEffect(() => {
  //     if (typeof window !== "undefined") {
  //       document.documentElement.scrollTo(0, 0);
  //     }
  //   }, [location.pathname]);
  //   return children;
  // };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Context_AllContext__WEBPACK_IMPORTED_MODULE_2__/* .PageContext */ .z1, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_Lang_LangProvider__WEBPACK_IMPORTED_MODULE_0__/* .LangProvider */ .ul, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Component, _objectSpread({}, pageProps))
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 4178:
/***/ (() => {



/***/ })

};
;