import classNames from "classnames";
import styles from "./Sponsers.module.scss";

interface IProps {
  reverse?: boolean;
  sponsers?: { url: string }[];
}

const Sponsers = ({ reverse, sponsers }: IProps) => {
  if (reverse === undefined) {
    reverse = false;
  }

  console.log(sponsers);

  return (
    <div className={styles.slider}>
      <div
        className={classNames(
          styles["slide-track"],
          reverse ? styles.reverse : ""
        )}
      >
        {sponsers?.map((sponser) => (
          <div className={styles.slide}>
            <img src={sponser.url} className="w-full" alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsers;
