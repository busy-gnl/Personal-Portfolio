import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    console.log("lang :>> ", lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex border z-40 glass cursor-pointer overflow-hidden absolute md:w-min top-[115%] left-[50%] -translate-x-1/2 md:translate-x-0 md:top-[50%] md:left-4 md:-translate-y-1/2">
      <div
        className={`flex-1 p-2 text-center cursor-pointer text-xl ${
          i18n.language === "en"
            ? "glass2 text-white font-medium"
            : "bg-transparent text-neutral-300"
        }`}
        onClick={() => changeLanguage("en")}
        tabIndex={0}
      >
        English
      </div>
      <div
        className={`flex-1 p-2 text-center cursor-pointer text-xl ${
          i18n.language === "fr"
            ? "glass2 text-white font-medium"
            : "bg-transparent text-neutral-300"
        }`}
        onClick={() => changeLanguage("fr")}
        tabIndex={0}
      >
        Français
      </div>
    </div>
  );
}

export default LanguageSelector;
