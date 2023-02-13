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
    <button className={classnames(styles.crosshair, className)}>
      <span className={styles.button__inner}>
        <span className={styles.button__text}>{children}</span>
        <span className={styles.button__slide_left}></span>
        <span className={styles.button__slide_right}></span>
      </span>
    </button>
  );
};

export default Button;
