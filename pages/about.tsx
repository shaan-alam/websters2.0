/* eslint-disable @next/next/no-img-element */
import { Layout, Navbar, TeamCard } from "@/components/";
import { AnimatedImage, AnimatedLine } from "@/components";
import styles from "@/styles/About.module.scss";
import { graphcms } from "./techelons";
import { GetStaticProps } from "next";

export interface ITeam {
  id: string;
  instagramUrl: string;
  linkedInUrl: string;
  name: string;
  post: string;
  photo: {
    url: string;
  } | null;
}

const About = ({
  team,
}: {
  team: {
    president: ITeam;
    technicalHeads: ITeam[];
    creativeHead: ITeam;
    studentCoordinators: ITeam[];
    members: ITeam[];
    coreMembers: ITeam[];
    secretary: ITeam;
    generalSecretary: ITeam;
    treasurer: ITeam;
  };
}) => {
  console.log(team);
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
          className="text-white text-xl md:text-6xl mt-2 w-full"
        />
        <AnimatedLine
          text="through innovation"
          className="text-white text-xl md:text-6xl my-2 w-full"
        />
        <AnimatedLine
          text="and technology"
          className="text-white text-xl md:text-6xl my-2 w-full"
        />
      </div>
      <AnimatedImage
        src="/about-hero.webp"
        alt=""
        className="w-full object-cover"
      />
      <div className={styles["about-bg"]}>
        <div className="w-[80%] mx-auto">
          <AnimatedLine
            text="About Websters"
            className="text-white text-2xl md:text-6xl mt-2 w-full"
          />
          <div className="md:w-1/2">
            <p>
              The Department of Computer Science was established in 1984. The
              Department aims at upholding the cognitivean aspect of education
              by ensuring academic excellence and the intellectual growth of its
              students. The department lays prime focus on academics
              interspersed with co-curricular and extra-curricular activities
              that bring the versatility of its students to the fore and gives
              them a sound sense of perspective. The faculty comprises
              experienced and dedicated teachers who with their expert inputs
              encourage students to explore new avenues.
            </p>
            <p>
              The computer society “Websters” was started to foster interest in
              the world of computers and technology. It provides a platform for
              like-minded brains to communicate with each other and expand their
              horizons. Every year the Department organizes lectures by eminent
              people from the industry. The Society celebrates its annual
              technical fest “Techelons” with great enthusiasm and zeal.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] my-20 mx-auto">
        <AnimatedLine
          text="Our Council"
          className="text-white text-2xl md:text-6xl mt-2 w-full"
        />
        <div className="md:grid grid-cols-3 gap-8 my-8">
         <TeamCard />
        </div>
      </div>
    </Layout>
  );
};

export default About;

// export const getStaticProps: GetStaticProps = async () => {
//   const { teams }: { teams: ITeam[] } = await graphcms.request(
//     `
//     query Team {
//       teams() {
//         id
//         instagramUrl
//         linkedInUrl
//         name
//         post
//         photo {
//           url
//         }
//       }
//     }
    
//   `
//   );

//   const president = teams.find((member) => member.post === "President");
//   const technicalHeads = teams.filter(
//     (member) => member.post === "Technical Head"
//   );
//   const creativeHead = teams.find(
//     (member) => member.post === "Creative Head"
//   );
//   const studentCoordinators = teams.filter(
//     (member) => member.post === "Student Coordinator"
//   );
//   const members = teams.filter((member) => member.post === "Member");
//   const coreMembers = teams.filter((member) => member.post === "Core Member");
//   const secretary = teams.find((member) => member.post === "Secretary");
//   const generalSecretary = teams.find(
//     (member) => member.post === "General Secretary"
//   );
//   const treasurer = teams.filter((member) => member.post === "Treasurer");

//   return {
//     props: {
//       team: {
//         president,
//         technicalHeads,
//         creativeHead,
//         studentCoordinators,
//         members,
//         coreMembers,
//         secretary,
//         generalSecretary,
//         treasurer,
//       },
//     },
//   };
// };
