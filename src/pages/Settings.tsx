import CustomPopover from "../components/popovers/CustomPopover";
import UserSettings from "../components/products/UserSettings";
import ToolTip from "../components/ToolTip";

const Settings = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 h-[100vh] pt-50">
      <UserSettings />
      <ToolTip />

    </div>
  );
};

export default Settings;
