import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import { motion } from "framer-motion";

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
          <div className="my-12 md:my-0 hero-right md:w-3/4 relative overflow-hidden">
            <motion.div
              className="image-container absolute inset-0 bg-[#121212] origin-left z-10"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            ></motion.div>
            <motion.img
              src="./hero-image.png"
              className="w-full relative z-[5]"
              alt="Hero Image"
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeIn" }}
            />
          </div>
        </div>
      </section>

      <section id="events" className="my-12">
        <div className="w-[80%] mx-auto">
          <Header text="Events" />
          <div className="lg:grid grid-cols-2 gap-12 my-8">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
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
    </Layout>
  );
};

export default App;
