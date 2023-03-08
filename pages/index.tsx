import Button from "@/components/Button";
import EventCard from "@/components/EventCard";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import Footer from "@/components/Footer";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion";
import AnimatedLine from "@/components/AnimatedLine";
import AnimatedParagraph from "@/components/AnimatedParagraph";

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

const colVariants = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const colImageVariants = {
  initial: {
    opacity: 0,
    y: "10%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const App = () => {
  return (
    <Layout>
      <Navbar />
      <section className="hero relative">
        <span className="absolute h-[500px] w-[200px] rounded-full md:w-[600px] bg-blue-700 blur-[350px] md:blur-[600px]"></span>
        <span className="absolute top-[50rem] h-[100px] w-[200px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[400px]"></span>
        <span className="absolute top-[100rem] right-10 h-[500px] w-[200px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[400px]"></span>
        <span className="absolute h-[200px] top-[150rem] w-[200px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[400px]"></span>
        <div className="w-[80%] mx-auto py-12 lg:flex items-center">
          <div className="hero-left">
            <div className="relative overflow-hidden">
              <AnimatedLine
                text="Hey, we are"
                className="text-center md:text-left text-gray-500 text-2xl my-0"
              />
            </div>
            <div className="relative overflow-hidden">
              <AnimatedLine
                text="Websters"
                className="text-center md:text-left text-[3rem] mb-4 font-primary text-white font-bold uppercase md:text-[7rem] md:mb-0"
              />
            </div>
            <motion.p
              className="text-center md:text-left text-gray-500 md:w-3/4 w-full -mt-8"
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
                <Button className="mt-8">Get Started</Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="my-12 md:my-0 hero-right md:w-full relative">
            <div className="masonry-layout flex flex-row justify-center items-stretch mt-20 md:mt-0">
              <motion.div
                className="flex flex-col flex-start stretch"
                variants={colVariants}
                initial="initial"
                animate="animate"
              >
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image.png"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image8.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image6.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
              </motion.div>
              <motion.div
                className="-my-16 md:-my-32 mx-2"
                variants={colVariants}
                initial="initial"
                animate="animate"
              >
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image2.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image3.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image4.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image7.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
              </motion.div>
              <motion.div
                className="-my-12"
                variants={colVariants}
                initial="initial"
                animate="animate"
              >
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image5.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image9.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <motion.img
                  variants={colImageVariants}
                  src="/hero-image10.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-websters" className="my-20 md:my-48">
        <div className="w-[80%] mx-auto md:grid grid-cols-2 gap-12">
          <div className="left-col my-4 md:my-0">
            <img src="/logo.svg" alt="Websters" className="w-[70%]" />
          </div>
          <div className="right-col">
            <AnimatedLine
              text="About Websters"
              className="text-4xl font-bold text-primary uppercase"
            />

            <div className="about-container text-gray-500">
              <p className="my-4">
                The Department of Computer Science was established in 1984. The
                Department aims at upholding the cognitive aspect of education
                by ensuring academic excellence and intellectual growth of its
                students.
              </p>
              <p className="my-4">
                The department lays prime focus on academics interspersed with
                co-curricular and extra-curricular activities that bring the
                versatility of its students to the fore and gives them a sound
                sense of perspective. The faculty comprises of experienced and
                dedicated teachers who with their expert inputs encourage
                students to explore new avenues.
              </p>
              <p className="my-4">
                The computer society “Websters” was started with the aim to
                foster interest in the world of computers and technology. It
                provides a platform for likeminded brains to communicate with
                each other and expand their horizons.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-techelons" className="my-20 md:my-48">
        <div className="w-[80%] mx-auto block md:grid grid-cols-2 gap-12">
          <div className="left-col my-4 md:my-0">
            <AnimatedLine
              text="About Techelons"
              className="text-4xl font-bold text-primary uppercase"
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
                Itaque vel neque possimus, molestias consectetur cum in ratione
                sequi error natus molestiae distinctio facere accusamus, minima
                facilis autem sint unde! Delectus, quam!
              </p>
            </div>
          </div>
          <div className="right-col">
            <img src="/techelons.png" alt="Techelons" />
          </div>
        </div>
      </section>

      <section id="events" className="my-12">
        <div className="w-[80%] mx-auto">
          <AnimatedLine
            text="Our Events"
            className="text-3xl md:text-6xl font-bold text-primary uppercase"
          />
        </div>
        <div className="w-[80%] mx-auto">
          <motion.div
            className="lg:grid gap-12 justify-items-center grid-cols-4 my-8"
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
          <AnimatedLine
            text="Meet The Team"
            className="text-5xl md:text-6xl font-bold text-primary uppercase"
          />
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
