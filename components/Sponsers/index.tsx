import classNames from "classnames";
import { v4 } from "uuid";
import styles from "./Sponsers.module.scss";

interface IProps {
  reverse?: boolean;
  sponsers?: {
    img: {
      url: string;
    };
  }[];
}

const Sponsers = ({ reverse, sponsers }: IProps) => {
  if (reverse === undefined) {
    reverse = false;
  }

  console.log(sponsers);

  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.slider}>
        <div
          className={classNames(
            styles["slide-track"],
            reverse ? styles.reverse : ""
          )}
        >
          {sponsers?.map((sponser) => (
            <div className={styles.slide} key={v4()}>
              <img
                src={sponser.img.url}
                className=""
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsers;
