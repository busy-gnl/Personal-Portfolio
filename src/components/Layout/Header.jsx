import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
// import { useState } from "react";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const checkActive = (path) => {
    return location.pathname === path;
  };

  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="relative bg-transparent">
        <LanguageSelector />
        <nav className="w-full py-3 flex justify-center md:justify-end items-center -translate-x-[2.5%]">
          <ul className="nav-list ml-[5%] glass flex justify-between items-center gap-1 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl rounded-full font-medium px-[20px] p-[10px] bg-slate-50">
            <li
              className={`py-1 md:py-[10px] px-2 md:px-5 rounded-3xl text-center ${
                checkActive("/") ? "glass2" : ""
              }`}
            >
              <NavLink to="/">{t("nav-about")}</NavLink>
            </li>
            <li
              className={`py-1 md:py-[10px] px-2 md:px-5 rounded-3xl text-center ${
                checkActive("/works") ? "glass2" : ""
              }`}
            >
              <NavLink to="/works">{t("nav-works")}</NavLink>
            </li>
            {/* <li className={`py-1 md:py-[10px] px-2 md:px-5 rounded-3xl text-center ${
                checkActive("/skills") ? "glass2" : ""
              }`}>
              <NavLink to="/skills">
                {t("nav-skills")}
              </NavLink>
            </li> */}
            {/* <li className={`py-1 md:py-[10px] px-2 md:px-5 rounded-3xl text-center ${
                checkActive("/notes") ? "glass2" : ""
              }`}>
              <NavLink to="/notes">
                {t("nav-notes")}
              </NavLink>
            </li> */}
            <li
              className={`py-1 md:py-[10px] px-2 md:px-5 rounded-3xl text-center ${
                checkActive("/contact") ? "glass2" : ""
              }`}
            >
              <NavLink to="/contact">{t("nav-contact")}</NavLink>
            </li>
          </ul>
        </nav>
        {/* <button
          type="button"
          className="menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button> */}
      </header>
    </div>
  );
}
