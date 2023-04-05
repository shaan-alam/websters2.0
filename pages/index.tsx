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
    <Layout title="Home - Websters">
      <Navbar />
      <section className="hero relative">
        <span className="absolute h-[150px] w-[150px] left-0 rounded-full lg:h-[400px] lg:w-[600px] bg-blue-700 blur-[100px] md:blur-[500px]"></span>
        <span className="absolute top-[50rem] h-[100px] w-[200px] right-0 rounded-full lg:h-[400px] lg:w-[500px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
        {/* <span className="absolute top-[100rem] right-10 h-[100px] left-0 w-[100px] rounded-full md:h-[400px] md:w-[500px] bg-blue-700 blur-[100px] md:blur-[400px]"></span> */}
        <div className="w-[80%] mx-auto lg:grid grid-cols-2 gap-8 items-center">
          <div className="hero-left lg:mt-[3rem] xl:mt-[-5rem]">
            <AnimatedLine
              text="Hey, we are"
              className="text-center md:text-left text-gray-500 text-2xl my-0"
            />
            <AnimatedLine
              text="Websters"
              className="text-center md:text-left text-[3rem] mb-4 font-primary text-white font-bold uppercase lg:text-[6rem] md:mb-0"
            />
            <motion.p
              className="text-center md:text-left text-gray-500 md:w-3/4 w-full lg:-mt-8 leading-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, ease: "easeInOut" }}
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
                transition={{ delay: 1, ease: "easeInOut" }}
                className="relative block"
              >
                <Button className="mt-8">Get Started</Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="hero-right md:w-full relative">
            <div className="masonry-layout flex flex-row justify-center items-stretch mt-24 lg:mt-0">
              <div className="flex flex-col flex-start stretch">
                <img
                  src="/hero-image.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image8.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image6.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
              </div>
              <div className="-my-16 md:-my-32 mx-2">
                <img
                  src="/hero-image2.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image3.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image4.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image14.gif"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image11.jpg"
                  className="w-full my-2 rounded-md masonry-tile"
                />
              </div>
              <div className="-my-12">
                <img
                  src="/hero-image5.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image9.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
                <img
                  src="/hero-image10.webp"
                  className="w-full my-2 rounded-md masonry-tile"
                />
              </div>
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
              className="text-2xl md:text-4xl font-bold text-primary uppercase"
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

      <Footer />
    </Layout>
  );
};

export default App;
