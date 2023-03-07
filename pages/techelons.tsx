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
import AnimatedLine from "@/components/AnimatedLine";
import EventCard from "@/components/EventCard";
import sanityClient from "@/sanityClient";
import { GetStaticProps } from "next";
import {
  containerVariants,
  itemVariant,
  subtitleCharVariant,
  subtitleContainerVariants,
} from "@/constants";
import EventBanner from "@/components/EventBanner";

export interface IEvent {
  name: string;
  poster: string;
  slug: string;
  description: string | null;
}

const Techelons = ({ events }: { events: IEvent[] }) => {
  const subtitle = "Annual Tech Fest of Shivaji College";
  const arraySub = subtitle.split(" ").map((s) => s + " ");
  console.log(events);

  return (
    <Layout>
      <Navbar />
      <section className={styles.wrapper}>
        <span className="absolute right-0 h-[500px] w-[200px] rounded-full md:w-[900px] blur-[350px] md:blur-[400px]"></span>
        <div className="lg:flex">
          <div className="col-left lg:w-3/4 w-full">
            <div className="ml-8 lg:ml-20">
              <AnimatedText
                text="TECHELONS"
                className="text-[2rem] md:text-[5rem] text-white mt-24 lg:text-left"
              />
              <p className="text-white leading-7 font-secondary lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis saepe, aliquid nesciunt vero ducimus, corporis dolor
                reiciendis libero cupiditate perferendis quos ipsam vel?
                Aperiam, corporis fugiat. Iusto molestiae labore laboriosam?
              </p>
              <div className="flex justify-start">
                <Button className="mt-8">Check Out Events</Button>
              </div>
            </div>
          </div>
          <div className="col-right h-screen w-full cursor-grabbing  relative -z-1">
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
      <section className="my-24 h-[60vh] flex flex-col justify-center">
        <div className="w-[80%] mx-auto">
          <div className="block md:grid grid-cols-2 gap-12 my-24">
            <div className="left-col my-4 md:my-0">
              <Parallax speed={4}>
                <AnimatedText
                  text="ABOUT TECHELONS"
                  className="text-white text-2xl lg:text-[3rem] mt-20"
                />
              </Parallax>
              <div className="text-gray-300">
                <p className="my-4 leading-8">
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
      <section className="events h-screen w-full">
        <div className="container w-[80%] mx-auto">
          <Parallax speed={6}>
            <AnimatedLine
              text="Our Events"
              className="text-white text-2xl lg:text-[3rem] mt-20"
            />
          </Parallax>
          <motion.div
            className="my-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={itemVariant}>
              {events.map((event) => (
                <EventBanner event={event} key={event.slug} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Techelons;

export const getStaticProps: GetStaticProps = async () => {
  const events = await sanityClient.fetch(`*[_type == "event"] {
    name,    
    "poster": poster.asset->url,
    "slug": slug.current,
    description
  }`);

  return {
    props: {
      events,
    },
  };
};
