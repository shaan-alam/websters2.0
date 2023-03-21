import { FaTimes } from "react-icons/fa";
import classNames from "classnames";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element | JSX.Element[];
  title?: string;
  className?: string
}

const Modal = ({ isOpen, setIsOpen, children, title, className }: IProps) => {
  return isOpen ? (
    <div className="fixed inset-0 z-[50] flex items-center justify-center">
      <div className="fixed z-[20] inset-0 bg-[#000] opacity-90"></div>
      <div className={classNames("modal-body rounded-md shadow-md w-[90%] reltative z-[50] bg-[#121212]", className)}>
        <div className="header py-2 flex items-center justify-end mb-4 border-b border-[#333]">
          {title && (
            <div className="font-secondary ml-auto text-gray-500 font-bold">
              {title}
            </div>
          )}
          <a
            href="#!"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full transition-all hover:bg-black ml-auto mr-2"
          >
            <FaTimes className="text-gray-400 cursor-pointer" />
          </a>
        </div>
        <div className="modal-content px-4 md:px-12 py-4">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
