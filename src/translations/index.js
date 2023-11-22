import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from "./en/translation-en.json"; // Chemin d'accès à vos fichiers de traduction
import frTranslations from "./fr/translation-fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    fr: {
      translation: frTranslations,
    },
  },
  lng: "fr", // Langue par défaut
  fallbackLng: "fr", // Utilisez cette langue lorsque la langue spécifiée n'est pas disponible
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
