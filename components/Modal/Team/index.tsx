import Modal from "@/components/Modal";
import { useFormik } from "formik";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import * as yup from "yup";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addMember: (name: string, email: string) => void;
  title: string;
}

const TeamModal = ({ isOpen, setIsOpen, addMember, title }: IProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup.string().required("Email is required"),
    }),
    onSubmit: (values) => {
      const { name, email } = values;
      addMember(name, email);
      setIsOpen(false);
    },
  });

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={title}>
      <div className="form-field my-4">
        <form onSubmit={formik.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            placeholder="John Doe"
            label="Name"
            formik={formik}
          />
          <FormInput
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            label="Email"
            formik={formik}
          />
          <button
            className="px-4 py-2 bg-[#000] text-white text-sm inline-block rounded-md mx-auto w-full text-center"
            onClick={() => formik.handleSubmit()}
          >
            Add
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default TeamModal;
