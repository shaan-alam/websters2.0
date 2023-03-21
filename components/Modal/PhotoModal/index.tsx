import { Modal } from "@/components";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
}

const PhotoModal = ({ isOpen, setIsOpen, img }: IProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} className="w-[900px]">
      <img src={img} className="h-full" />
    </Modal>
  );
};

export default PhotoModal;
