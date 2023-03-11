import { useContext } from "react";
import Modal from "@/components/Modal";
import { Context, ContextType } from "@/context/GlobalContext";
import useWindowSize from "react-use/lib/useWindowSize";

import ReactConfetti from "react-confetti";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThankYou = ({ isOpen, setIsOpen }: IProps) => {
  const { width, height } = useWindowSize();
  const { user } = useContext(Context) as ContextType;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <ReactConfetti width={width} height={height} />
      <div className="w-[auto] text-center">
        <img
          src={user?.avatar}
          alt=""
          className="h-24 w-24 border-4 rounded-full mx-auto mb-6"
        />
        <h1 className="text-center text-white font-bold mb-2 text-sm">
          Thank you {user?.name} for registering...
        </h1>
        <p className="font-secondary text-gray-400 text-sm">
          Please join this WhatsApp Group -
        </p>
        <a
          href="https://chat.whatsapp.com/Cg2lnyouPumBsCm9XvLSfJ"
          className="text-blue-500 block"
        >
          https://chat.whatsapp.com/Cg2lnyouPumBsCm9XvLSfJ
        </a>
        <a
          href="#!"
          className="px-4 py-2 bg-[#000] text-white text-sm inline-block rounded-md mt-4"
          onClick={() => setIsOpen(false)}
        >
          Ok
        </a>
      </div>
    </Modal>
  );
};

export default ThankYou;
