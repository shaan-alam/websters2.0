import AnimatedLine from "../AnimatedLine";
import styles from "./FormInput.module.scss";

interface IProps {
  type: string;
  name: string;
  placeholder: string;
  formik: any;
  label: string;
  disabled?: boolean;
}

const FormInput = ({
  type,
  name,
  formik,
  placeholder,
  label,
  disabled,
}: IProps) => {
  if (type === "textarea") {
    return (
      <div>
        <label htmlFor={name} className="text-gray-300 text-sm">
          {label}
        </label>
        {formik.errors[name] && formik.touched[name] && (
          <AnimatedLine
            text={formik.errors[name]}
            className="text-[0.7rem] text-red-600 font-secondary"
            isHeading={false}
          />
        )}
        <textarea
          name={name}
          id=""
          cols={30}
          rows={10}
          placeholder={placeholder}
          className={styles['input-textarea']}
          {...formik.getFieldProps(name)}
        ></textarea>
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={name} className="text-gray-300 text-sm">
        {label}
      </label>
      {formik.errors[name] && formik.touched[name] && (
        <AnimatedLine
          text={formik.errors[name]}
          className="text-[0.7rem] text-red-600 font-secondary"
          isHeading={false}
        />
      )}
      <input
        type={type}
        id={name}
        className={styles.input}
        placeholder={placeholder}
        disabled={disabled}
        {...formik.getFieldProps(name)}
      />
    </div>
  );
};

export default FormInput;
