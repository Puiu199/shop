import { useEffect } from "react";
import { Modal } from "react-bootstrap";

const ModalBootstrap = ({
  shown,
  setShown,
}: {
  shown: boolean;
  setShown: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    return () => {
      console.log("modalul s-a distrus");
    };
  }, []);

  return (
    <Modal
      centered
      show={shown}
      onHide={() => {
        setShown(false);
      }}
      animation
      backdrop
      fullscreen
      className="h-screen"
    >
      <div
        className="w-screen h-screen flex justify-center items-center "
        onClick={() => {
          setShown(false);
        }}
      >
        <div
          className="w-[400px] h-[300px]  flex flex-col justify-around rounded-2xl bg-amber-200 z-[1]"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <p className=" text-center text-2xl">precis vrei sa salvezi??</p>
          <div className="flex justify-evenly items-center">
            <button
              className="border-[1px] rounded-xl p-2.5 bg-amber-50"
              onClick={() => {
                setShown(false);
              }}
            >
              Save
            </button>
            <button
              className="border-[1px] rounded-xl p-2.5 bg-amber-50"
              onClick={() => {
                setShown(false);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBootstrap;
