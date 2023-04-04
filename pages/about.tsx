/* eslint-disable @next/next/no-img-element */
import { Footer, Layout, Navbar, TeamCard } from "@/components/";
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
    treasurer: ITeam;
    secretary: ITeam;
    socialMediaHead: ITeam;
    vicePresident: ITeam;
  };
}) => {
  return (
    <Layout title="About Us">
      <Navbar />
      <span className="absolute left-0 h-[300px] w-[200px] bg-blue-800 rounded-full md:w-[900px] blur-[150px] md:blur-[400px]"></span>
      <span className="absolute top-[50rem] h-[100px] w-[200px] rounded-full md:h-[400px]  md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
      <span className="absolute top-[100rem] right-10 sm:h-[500px] w-[200px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
      <span className="absolute h-[100px] top-[150rem] w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
      <span className="absolute h-[100px] top-[200rem] right-10 w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
      <span className="absolute h-[100px] top-[250rem] w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
      <span className="absolute h-[100px] top-[300rem] right-10 w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
      <div className="w-[80%] mx-auto my-8">
        <h1 className="text-white">About Us</h1>
        <hr className="text-red-500 w-[100px] block mb-8 mt-2" />
        <AnimatedLine
          text="Empowering the future"
          className="text-white text-xl md:text-6xl mt-2 w-full uppercase"
        />
        <AnimatedLine
          text="through innovation"
          className="text-white text-xl md:text-6xl my-2 w-full uppercase"
        />
        <AnimatedLine
          text="and technology"
          className="text-white text-xl md:text-6xl my-2 w-full uppercase"
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
            <p className="font-secondary leading-7 my-4">
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
            <p className="font-secondary leading-7 my-4">
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
          <TeamCard member={team.president} />
          <TeamCard member={team.vicePresident} />
          {team.technicalHeads.map((member) => (
            <TeamCard member={member} key={member.id} />
          ))}
          <TeamCard member={team.creativeHead} />
          <TeamCard member={team.treasurer} />
          <TeamCard member={team.secretary} />
          {team.studentCoordinators.map((member) => (
            <TeamCard member={member} key={member.id} />
          ))}
          {team.coreMembers.map((member) => (
            <TeamCard member={member} key={member.id} />
          ))}
          {team.members.map((member) => (
            <TeamCard member={member} key={member.id} />
          ))}
          <TeamCard member={team.socialMediaHead} />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const { teams }: { teams: ITeam[] } = await graphcms.request(
    `
    query Team {
      teams() {
        id
        instagramUrl
        linkedInUrl
        name
        post
        photo {
          url
        }
      }
    }

  `
  );

  const president = teams.find(
    (member) => member.post.trim().toLowerCase() === "president"
  );

  const vicePresident = teams.find(
    (member) => member.post.trim().toLowerCase() === "vice president"
  );

  const technicalHeads = teams.filter(
    (member) => member.post === "Technical Head"
  );
  const creativeHead = teams.find(
    (member) => member.post.trim().toLowerCase() === "creative head"
  );
  const studentCoordinators = teams.filter(
    (member) => member.post === "Student Coordinator"
  );
  const members = teams.filter(
    (member) => member.post.trim().toLowerCase() === "member"
  );
  const coreMembers = teams.filter(
    (member) => member.post.trim().toLowerCase() === "core member"
  );
  const secretary = teams.find(
    (member) => member.post.trim().toLowerCase() === "secretary"
  );

  const treasurer = teams.find(
    (member) => member.post.trim().toLowerCase() === "treasurer"
  );

  const socialMediaHead = teams.find(
    (member) => member.post.trim().toLowerCase() === "social media head"
  );

  return {
    props: {
      team: {
        president,
        technicalHeads,
        creativeHead,
        studentCoordinators,
        members,
        coreMembers,
        treasurer,
        secretary,
        socialMediaHead,
        vicePresident,
      },
    },
  };
};
