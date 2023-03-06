import Navbar from "@/components/Navbar";
import styles from "../styles/Techelons.module.scss";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import AnimatedText from "@/components/AnimatedLine";
import Layout from "@/components/Layout";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei/core";
import Model from "@/components/Model";
import Button from "@/components/Button";
import { Parallax } from "react-scroll-parallax";

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
    <Layout>
      <Navbar />
      <section className={styles.wrapper}>
        <span className="absolute right-0 h-[500px] w-[200px] rounded-full md:w-[900px] blur-[350px] md:blur-[400px]"></span>
        <div className="lg:flex">
          <div className="col-left w-3/4">
            <div className="ml-20">
              <Parallax speed={10}>
                <AnimatedText
                  text="TECHELONS"
                  className="text-[2rem] md:text-[5rem] text-white mt-24"
                />
              </Parallax>
              <Parallax speed={8} className="-mt-8">
                <p className="text-white leading-7 font-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis saepe, aliquid nesciunt vero ducimus, corporis dolor
                  reiciendis libero cupiditate perferendis quos ipsam vel?
                  Aperiam, corporis fugiat. Iusto molestiae labore laboriosam?
                </p>
              </Parallax>
              <Parallax speed={5}>
                <Button className="mt-8">Check Out Events</Button>
              </Parallax>
            </div>
          </div>
          <div className="col-right lg:h-screen w-full cursor-grabbing  relative -z-1">
            <Canvas
              className=""
              shadows
              dpr={[1, 2]}
              camera={{ position: [0, 2, 5], fov: 50 }}
            >
              <Suspense fallback={null}>
                <Model />
                <Environment preset="city" />
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>
        </div>
      </section>
      <section className="my-24">
        <div className="w-[80%] mx-auto">
          <div className="block md:grid grid-cols-2 gap-12 my-24">
            <div className="left-col my-4 md:my-0">
              <Parallax speed={6}>
                <AnimatedText
                  text="ABOUT TECHELONS"
                  className="text-white text-[3rem]"
                />
              </Parallax>
              <Parallax speed={10}>
                <div className="text-gray-500">
                  <p className="my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus quod iusto eligendi ab repellat aut vel officiis!
                    Itaque vel neque possimus, molestias consectetur cum in
                    ratione sequi error natus molestiae distinctio facere
                    accusamus, minima facilis autem sint unde! Delectus, quam!
                  </p>
                </div>
              </Parallax>
            </div>
            <div className="right-col">
              <img src="/techelons.png" alt="Techelons" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Techelons;
