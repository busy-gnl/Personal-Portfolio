/* eslint-disable react/no-unescaped-entities */
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  return (
    <>
      <section className="flex flex-col gap-16">
        <div className="flex flex-col gap-8 md:flex-row w-[90%] md:w-2/3 mx-auto justify-between items-center">
          <img
            src="public/jesse-lifté.png"
            alt=""
            className="w-full md:w-[444px] sm:w-[95%] shadow-xl rounded-3xl"
          />
          <h2 className="text-4xl font-semibold md:w-[40%] text-center md:text-end">
            {t("about-h2")}
          </h2>
        </div>
        <div className="flex flex-col gap-8 md:flex-row w-[90%] md:w-2/3 mx-auto justify-between items-center">
          <h1 className="text-5xl font-bold text-center md:text-start">
            {t("about-h1")}
          </h1>
          <h3 className="text-3xl font-semibold text-center md:text-end">
            {t("about-h3")}
          </h3>
        </div>

        <div className="flex flex-col gap-8 md:flex-row w-[90%] md:w-2/3 mx-auto justify-between">
          <p className="text-justify">{t("about-p1")}</p>

          <p className="text-justify">{t("about-p2")}</p>
        </div>

        <div className="w-[90%] md:w-2/3 mx-auto flex-col flex gap-2">
          <p className="font-medium">{t("about-list")}</p>
          <p>{t("about-li-1")}</p>
          <p>{t("about-li-2")}</p>
          <p>{t("about-li-3")}</p>
          <p>{t("about-li-4")}</p>
          <p>{t("about-li-5")}</p>
        </div>
      </section>
    </>
  );
}
