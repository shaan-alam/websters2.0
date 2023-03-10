import AnimatedLine from "../AnimatedLine";
import styles from "./FormInput.module.scss";

interface IProps {
  type: string;
  name: string;
  placeholder: string;
  formik: any;
}

const FormInput = ({ type, name, formik, placeholder }: IProps) => {
  return (
    <>
      {formik.errors[name] && formik.touched[name] && (
        <AnimatedLine
          text={formik.errors[name]}
          className="text-[0.7rem] text-red-600 font-secondary"
        />
      )}
      <input
        type={type}
        id={name}
        className={styles.input}
        placeholder={placeholder}
        {...formik.getFieldProps(name)}
      />
    </>
  );
};

export default FormInput;
