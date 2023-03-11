import { useContext } from "react";
import Modal from "@/components/Modal";
import { Context, ContextType } from "@/context/GlobalContext";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThankYou = ({ isOpen, setIsOpen }: IProps) => {
  const { user } = useContext(Context) as ContextType;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div>
        <img
          src={user.avatar}
          alt=""
          className="h-12 w-12 rounded-full mx-auto"
        />
        <h1 className="text-center text-white font-bold">
          Thank you {user.name} for registering...
        </h1>
        <p>
          Please join this WhatsApp Group -
          <a
            href="https://chat.whatsapp.com/Cg2lnyouPumBsCm9XvLSfJ"
            className="text-blue-500"
          >
            https://chat.whatsapp.com/Cg2lnyouPumBsCm9XvLSfJ
          </a>
        </p>
      </div>
    </Modal>
  );
};

export default ThankYou;
