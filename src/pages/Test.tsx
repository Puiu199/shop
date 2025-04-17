import Accordion from "../components/Accordion";
import CustomPopover from "../components/popovers/CustomPopover";
import ToolTip from "../components/ToolTip";

const Test = () => {
  return (
    <div>
      <button className="btn">Default</button>
      <CustomPopover id="sgankgnask" />
      <ToolTip />
      <Accordion />
    </div>
  );
};

export default Test;
