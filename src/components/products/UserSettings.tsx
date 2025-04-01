import { useState } from "react";
import { changeUser } from "../../api/requests";
import useUserStore from "../../store/useUserStore";
import { useTranslation } from "react-i18next";
const UserSettings = () => {
  const { user, setUser } = useUserStore();
  const [firstName, setName] = useState<string>(user?.firstName || "");
  const [lastName, setLastName] = useState<string>(user?.lastName || "");
  const [phoneNumber, setPhoneNumber] = useState<string>(user?.phoneNumber || "");

  const { t, i18n } = useTranslation();

  const clickChanger = () => {
    if (firstName !== user?.firstName || lastName !== user?.lastName || phoneNumber !== user?.phoneNumber) {
      changeUser({ firstName, lastName, phoneNumber })
        .then(() => {
          if (user) {
            const updatedUser = {
              ...user,
              firstName: firstName,
              lastName: lastName,
              phoneNumber: phoneNumber,
            };

            setUser(updatedUser);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="w-3/4 max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">{t("settings.title")}</h2>

      <div className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">{t("settings.change-name")}</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={firstName}
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">{t("settings.change-last-name")}</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your last name"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-gray-700">{t("settings.phone-number")}</label>
          <input
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            type="email"
            className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <button
        onClick={() => {
          i18n.changeLanguage("ro");
        }}
        className={`mt-6 w-full py-2 ${
          i18n.language === "ro" ? "bg-blue-600" : "bg-blue-400"
        } text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        ro
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage("en");
        }}
        className={`mt-6 w-full py-2 ${
          i18n.language === "en" ? "bg-blue-600" : "bg-blue-400"
        } text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
      >
        en
      </button>
      <button
        onClick={clickChanger}
        className="mt-6 w-24 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {t("settings.save")}
      </button>
    </div>
  );
};
export default UserSettings;
