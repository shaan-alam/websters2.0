import { FaTimes } from "react-icons/fa";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
}

const Modal = ({ isOpen, setIsOpen, children }: IProps) => {
  return isOpen ? (
    <div className="fixed inset-0 z-[50] flex items-center justify-center">
      <div className="fixed z-[20] inset-0 bg-[#000] opacity-90"></div>

      <div className="modal-content reltative z-[50] bg-[#121212] px-12 py-8">
        <div className="header flex justify-end">
          <a href="#!" onClick={() => setIsOpen(false)}>
            <FaTimes className="text-gray-400 cursor-pointer" />
          </a>
        </div>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
