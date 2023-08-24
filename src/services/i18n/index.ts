import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBrJson from "./translations/ptBr.json";
import enJson from "./translations/en.json";

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem("language") || "ptBr",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ptBr: ptBrJson,
    en: enJson,
  },
});

export default i18n;