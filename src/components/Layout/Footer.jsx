import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bottom-0 w-full bg-transparent flex flex-col items-center gap-4 py-2 mt-8">
      <div className="flex gap-8 text-xl font-bold">
        <div>
          <Link
            className="flex gap-2 items-center"
            href="https://www.linkedin.com/in/jesse-vallant-939ba31a4/"
          >
            LinkedIn
            <BsLinkedin className="cursor-pointer" />
          </Link>
        </div>
        <div>
          <Link
            className="flex gap-2 items-center"
            href="https://github.com/busy-gnl"
          >
            Github
            <ImGithub className="cursor-pointer" />
          </Link>
        </div>
      </div>
      <div className="flex gap-2 items-center text-lg font-semibold">
        {t("footer-madeWith")} <AiFillHeart className=" text-red-700" />{" "}
        {t("footer-by")} Jesse Vallant
      </div>
      <a
        href="https://www.flaticon.com/free-icons/portfolio"
        title="portfolio icons"
      >
        {t("footer-flaticon")} <span className="underline">Freepik</span> -
        Flaticon
      </a>
    </footer>
  );
}
