import { Modal } from "@/components";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
}

const PhotoModal = ({ isOpen, setIsOpen, img }: IProps) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <img src={img} alt="" />
    </Modal>
  );
};

export default PhotoModal;