import { useState } from "react";
import ModalBootstrap from "../components/modal/ModalBootstrap";

const Test = () => {
  const [shown, setShown] = useState<boolean>(false);

  return (
    <div>
      {shown && <ModalBootstrap shown={shown} setShown={setShown} />}
      <button
        className="border-[1px] rounded-xl p-2.5"
        onClick={() => {
          setShown(true);
        }}
      >
        {" "}
        Show modal
      </button>
      <button className="btn">Default</button>
    </div>
  );
};

export default Test;
