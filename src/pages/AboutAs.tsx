import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

const AboutAs = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-[url(src/assets/img/NEUMORPHIC_CIRCLES_BACKGROUND.jpg)] bg-cover bg-center">
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      <div className="relative z-10 text-left max-w-4xl mx-auto px-6 py-16 sm:py-24 md:py-32">
        <h1 className="text-4xl  text-left  sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          {t("about-us.page-name")}
        </h1>
        <h1
          onClick={() => {
            navigate("/");
          }}
          className="text-4xl sm:text-5xl font-extrabold  mb-4 leading-tight"
        >
          {t("about-us.title")}
        </h1>
        <p className="  text-gray-200 ">{t("about-us.description")}</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
          {t("about-us.second-title")}
        </h1>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg hover:bg-orange-600 transition duration-200">
          {t("about-us.home-button")}
        </button>
      </div>
    </div>
  );
};

export default AboutAs;
