import Modal from "@/components/Modal";
import { useFormik } from "formik";
import FormInput from "@/components/FormInput";
import Button from "@/components/Button";
import * as yup from "yup";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addMember: (name: string, email: string) => void;
}

const TeamModal = ({ isOpen, setIsOpen, addMember }: IProps) => {
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
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
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
          <Button onClick={() => formik.handleSubmit()}>+ Add Member</Button>
        </form>
      </div>
    </Modal>
  );
};

export default TeamModal;
