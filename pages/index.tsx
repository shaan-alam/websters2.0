import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};
const itemVariant = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const App = () => {
  return (
    <Layout>
      <Navbar />
      <section className="hero">
        <div className="w-[80%] mx-auto py-12 lg:flex items-center">
          <div className="hero-left">
            <div className="relative overflow-hidden">
              <motion.h1
                className="text-center md:text-left text-gray-500 font-primary text-3xl"
                initial={{ y: "20%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, ease: "easeInOut", duration: "0.5" }}
              >
                Hey, we are
              </motion.h1>
            </div>
            <div className="relative overflow-hidden">
              <motion.h1
                className="text-center md:text-left text-5xl my-2 font-primary text-primary font-bold uppercase md:text-8xl"
                initial={{ y: "20%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: "1", delay: 1 }}
              >
                Websters
              </motion.h1>
            </div>
            <motion.p
              className="text-center md:text-left text-gray-500 md:w-3/4 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, ease: "easeInOut" }}
            >
              The Computer Science Society of Shivaji College.The Department of
              Computer Science was established in 1984. The Department aims at
              upholding the cognitive aspect of education by ensuring academic
              excellence and intellectual growth of its students.
            </motion.p>
            <motion.div className="overflow-hidden relative md:block flex justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, ease: "easeInOut" }}
                className="relative block"
              >
                <Button className="my-4">Get Started</Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="my-12 md:my-0 hero-right md:w-3/4 relative">
            <div className="relative overflow-hidden">
              <motion.div
                className="image-container absolute inset-0 bg-[#121212] origin-left z-10"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 1, ease: "easeIn" }}
              ></motion.div>
              <motion.img
                src="./hero-image.png"
                className="w-full relative z-[5] shadow-2xl shadow-[#121212]"
                alt="Hero Image"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
              />
            </div>
            <div className="hidden lg:block">
              <motion.div
                className="image-container absolute top-0 left-[-10rem] bg-[#121212] origin-left z-10"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
              ></motion.div>
              <motion.img
                src="./hero-image2.jpg"
                className="absolute top-[4rem] -left-[10rem] w-3/4 z-[5] shadow-2xl shadow-[#121212]"
                alt="Hero Image"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.3, duration: 1, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="my-12">
        <div className="w-[80%] mx-auto">
          <Header text="Events" />
        </div>
        <div className="w-[100%] mx-auto">
          <motion.div
            className="lg:grid justify-items-center grid-cols-4 my-8"
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={itemVariant}>
              <EventCard />
            </motion.div>
            <motion.div variants={itemVariant}>
              <EventCard />
            </motion.div>
            <motion.div variants={itemVariant}>
              <EventCard />
            </motion.div>
            <motion.div variants={itemVariant}>
              <EventCard />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="teams" className="my-24">
        <div className="w-[80%] mx-auto">
          <Header text="Teams" />
          <div className="md:grid grid-cols-3 gap-8 my-8">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
          <div className="w-full flex justify-center">
            <Button>See All</Button>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default App;
