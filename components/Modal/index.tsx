interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute z-[20] inset-0 bg-[#000] opacity-80"></div>
      <div className="modal-content reltative z-[30] bg-[#121212] px-12 py-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas porro
        saepe ex. Eos ea facere similique veritatis eum dolores error sint
        ratione consectetur, minus delectus quis, est laborum aliquid eveniet!.
        
      </div>
    </div>
  );
};

export default Modal;
