import Navbar from "@/components/Navbar";
import styles from "../styles/Techelons.module.scss";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import AnimatedText from "@/components/AnimatedLine";

const subtitleContainerVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.025,
      ease: "easeInOut",
    },
  },
};

const subtitleCharVariant = {
  initial: {
    y: "100%",
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.85,
    },
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.455, 0.03, 0.515, 0.955],
      duration: 0.75,
    },
  },
};

const Techelons = () => {
  const subtitle = "Annual Tech Fest of Shivaji College";
  const arraySub = subtitle.split(" ").map((s) => s + " ");
  console.log(arraySub);

  return (
    <>
      <Navbar />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <AnimatedText
            text="TECHELONS"
            className="text-[2rem] md:text-[8rem] text-white"
          />
          <AnimatedText
            text="The Annual Tech Fest of Shivaji College"
            className="text-[1rem] md:text-[2rem] text-white"
          />
          <div className="block md:grid grid-cols-2 gap-12 my-24">
            <div className="left-col my-4 md:my-0">
              <AnimatedText
                text="ABOUT TECHELONS"
                className="text-[1rem] text-white"
              />
              <div className="text-gray-500">
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis saepe, aliquid nesciunt vero ducimus, corporis dolor
                  reiciendis libero cupiditate perferendis quos ipsam vel?
                  Aperiam, corporis fugiat. Iusto molestiae labore laboriosam?
                </p>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus quod iusto eligendi ab repellat aut vel officiis!
                  Itaque vel neque possimus, molestias consectetur cum in
                  ratione sequi error natus molestiae distinctio facere
                  accusamus, minima facilis autem sint unde! Delectus, quam!
                </p>
              </div>
            </div>
            <div className="right-col">
              <img src="/techelons.png" alt="Techelons" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Techelons;
