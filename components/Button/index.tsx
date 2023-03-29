import classnames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}

const Button = ({ className, children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={classnames(styles.btn, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
