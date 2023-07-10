import { createContext, useState, useEffect, useContext } from "react";
import { IntlProvider } from "react-intl";
import enUsMessages from "./EN.json";
import esEsMessages from "./ES.json";
import ptBrMessages from './BR.json';

const langContext = createContext();
export function useLang() {
  return useContext(langContext);
}
const LangProvider = ({ children }) => {
  const [messages, setMessages] = useState(enUsMessages);
  const [locale, setLocale] = useState("en-US");
  const GetString = (key) => messages[key] ?? "Not key";
  const switchLanguage = (lang) => {
    console.log("🚀  lang:", lang)
    switch (lang) {
      case "es-ES":
        setMessages(esEsMessages);
        setLocale("es-ES");
        break;

      case "en-US":
        setMessages(enUsMessages);
        setLocale("en-US");
        break;

      case 'pt-BR':
          setMessages(ptBrMessages)
          setLocale('pt-BR')
          break;

      default:
        setMessages(enUsMessages);
        setLocale("en-US");
        break;
    }
  };

  const value = {
    locale,
    switchLanguage,
    GetString,
  };

  useEffect(() => {
    const { language } = window.navigator;

    if (language === "es-ES" || language === "es-CL" || language === "es-MX") {
      setMessages(esEsMessages);
      setLocale("es-ES");
    } else {
      setMessages(enUsMessages);
      setLocale("en-US");
    }
  }, []);

  return (
    <langContext.Provider value={value}>
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
