import classnames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

const Button = ({ className, children }: ButtonProps) => {
  return (
    <button className={classnames(styles.btn, className)}>
      {children}
    </button>
  );
};

export default Button;
