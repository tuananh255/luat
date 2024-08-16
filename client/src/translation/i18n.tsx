// i18n.tsx
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resources from "./translation";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "vi",
    detection: {
      order: ["cookie", "localStorage", "path", "htmlTag", "subdomain"],
      caches: ["cookie"],
    },
    react: {
      useSuspense: false,
    },
  });
  i18n.on('changeLanguage', () => {
    document.body.classList.add('loading'); // Show loading indicator
  });
  
  i18n.on('changeLanguage', () => {
    document.body.classList.remove('loading'); // Hide loading indicator
  });
export default i18n;
