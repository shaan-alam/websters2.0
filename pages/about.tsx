/* eslint-disable @next/next/no-img-element */
import { Layout, Navbar, TeamCard } from "@/components/";
import { AnimatedImage, AnimatedLine } from "@/components";
import styles from "@/styles/About.module.scss";

const About = () => {
  return (
    <Layout>
      <Navbar />
      <span className="absolute h-[150px] w-[150px] left-0 rounded-full lg:h-[400px] lg:w-[600px] bg-blue-700 blur-[100px] md:blur-[500px]"></span>
      <span className="absolute top-[50rem] h-[100px] w-[200px] right-0 rounded-full lg:h-[400px] lg:w-[500px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
      <span className="absolute top-[100rem] right-10 h-[100px] left-0 w-[100px] rounded-full md:h-[400px] md:w-[500px] bg-blue-700 blur-[100px] md:blur-[400px]"></span>
      <div className="w-[80%] mx-auto my-8">
        <h1 className="text-white">About Us</h1>
        <hr className="text-red-500 w-[100px] block mb-8 mt-2" />
        <AnimatedLine
          text="Empowering the future"
          className="text-white text-6xl mt-2 w-full"
        />
        <AnimatedLine
          text="through innovation"
          className="text-white text-6xl my-2 w-full"
        />
        <AnimatedLine
          text="and technology"
          className="text-white text-6xl my-2 w-full"
        />
      </div>
      <AnimatedImage
        src="/about-hero.png"
        alt=""
        className="w-full object-cover"
      />
      <div className={styles["about-bg"]}>
        <div className="w-[80%] mx-auto">
          <AnimatedLine
            text="About Websters"
            className="text-white text-6xl mt-2 w-full"
          />
          <div className="w-1/2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              consequuntur optio nihil error, necessitatibus quae a unde
              blanditiis debitis architecto iste quidem nobis! Quidem ad, ex
              nihil assumenda voluptatem dicta!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam perferendis id laborum sunt commodi excepturi quos,
              dolore quam illum ad, cupiditate repellat. Natus cum laborum alias
              totam earum saepe nisi eaque provident, dolorem error deleniti
              excepturi officia? Expedita, sed nihil?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              consequuntur optio nihil error, necessitatibus quae a unde
              blanditiis debitis architecto iste quidem nobis! Quidem ad, ex
              nihil assumenda voluptatem dicta!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam perferendis id laborum sunt commodi excepturi quos,
              dolore quam illum ad, cupiditate repellat. Natus cum laborum alias
              totam earum saepe nisi eaque provident, dolorem error deleniti
              excepturi officia? Expedita, sed nihil?
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] my-20 mx-auto">
        <AnimatedLine
          text="Our Council"
          className="text-white text-6xl mt-2 w-full"
        />
        <div className="grid grid-cols-3 gap-8 my-8">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </Layout>
  );
};

export default About;
