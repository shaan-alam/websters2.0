import styles from "@/styles/Techelons.module.scss";
import AnimatedText from "@/components/AnimatedLine";
import { GetStaticProps } from "next";
import {
  Navbar,
  AnimatedLine,
  Layout,
  TimelineEvent,
  AnimatedImage,
  Footer,
  Sponsers,
} from "@/components";
import { GraphQLClient } from "graphql-request";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export interface IEvent {
  id: string;
  description: {
    markdown: string;
  };
  caption: {
    markdown: string;
  };
  deadline: string;
  eventHeading: string;
  date: string;
  venue: string;
  minTeamSize: number;
  maxTeamSize: number;
  poster: {
    url: string;
  };
  participationType: "Individual" | "Team";
  slug: string;
  whatsAppGroupUrl: string;
  tagline: string;
  eventSponsers: {
    url: string;
  }[];
}

interface ISpeaker {
  id: string;
  name: string;
  description: {
    markdown: string;
  };
  speakerImg: {
    url: string;
  };
}

interface IPartner {
  img: {
    url: string;
  };
}

export const graphcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clfqvrwvy0im601ui0g4xdhl6/master"
);

const Techelons = ({
  events,
  speaker,
  communityPartners,
  mediaPartners,
}: {
  events: IEvent[];
  speaker: ISpeaker;
  communityPartners: IPartner[];
  mediaPartners: IPartner[];
}) => {
  console.log(events);
  return (
    <Layout title="Techelons - The Annual Tech Fest of Shivaji College">
      <Navbar />
      <div className="wrapper">
        <section className={styles.wrapper}>
          <span className="absolute left-0 h-[300px] w-[200px] bg-blue-800 rounded-full md:w-[900px] blur-[150px] md:blur-[400px]"></span>
          <span className="absolute top-[50rem] h-[100px] w-[200px] rounded-full md:h-[400px]  md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          <span className="absolute top-[100rem] right-10 sm:h-[500px] w-[200px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          <span className="absolute h-[100px] top-[150rem] w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          <span className="absolute h-[100px] top-[200rem] w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          <span className="absolute h-[100px] top-[250rem] w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          <span className="absolute h-[100px] top-[300rem] right-10 w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          {/* <span className="absolute h-[100px] top-[350rem] left-10 w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          <span className="absolute h-[100px] top-[400rem] right-10 w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span>
          <span className="absolute h-[100px] top-[450rem] left-10 w-[300px] rounded-full md:h-[400px] md:w-[400px] bg-blue-700 blur-[150px] md:blur-[400px]"></span> */}
        </section>
        <section className="h-auto flex flex-col justify-center about-techelons">
          <div className="w-[80%] mx-auto">
            <div className="block md:grid grid-cols-2 gap-12 my-24">
              <div className="left-col">
                <img src="/techelons-poster.png" alt="Techelons" />
              </div>
              <div className="right-col my-4 md:my-0">
                <AnimatedText
                  text="ABOUT TECHELONS"
                  className="text-white text-2xl lg:text-[3rem]"
                />
                <div className="text-gray-300">
                  <p className="my-4 leading-8 relative z-20">
                    It gives us immense pleasure to inform you that the
                    Department of Computer Science, Shivaji College; University
                    of Delhi is organizing its Annual technical festival
                    Techelons’2023 on 12th and 13st April 2023.
                  </p>
                  <p className="my-4 leading-8 relative z-20">
                    The festival attracts students from colleges all over India
                    to compete and showcase their talent. Over the year students
                    from DTU, IITs, NSIT, DU MCA, IIITs, BHU, IPU, and
                    affiliated colleges of the University of Delhi have actively
                    participated in our technical festival. This will be the
                    ninth edition of Techelons, the Annual Computer Science Fest
                    of the College
                  </p>
                  <p className="my-4 leading-8 relative z-20">
                    The festival is a forum for similar minds to interact, share
                    and discuss the latest happenings in the field of computers
                    and help the growth of computer science. The festival offers
                    a mix of technical and non-technical events. Technical
                    events include IT Quiz, Data Divination, and Techno Heads
                    up. we have nontechnical events also which is Googler. The
                    success of the event depends on the generous support of our
                    sponsors to help fulfill and be associated with the event in
                    a variety of ways including monetary funds, sponsor prizes,
                    events, goodies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="speakers-section my-24">
          <div className="w-[80%] mx-auto">
            <AnimatedLine
              text="Speaker"
              className="text-white my-4 text-2xl md:text-4xl"
            />
            <div className="md:grid grid-cols-2 gap-8 my-6">
              <div className="col-left">
                <AnimatedImage
                  src={speaker.speakerImg.url}
                  alt=""
                  className="my-8 mx-auto speaker-img h-[360px] w-[360px] object-cover"
                />
              </div>
              <div className="col-right">
                <AnimatedLine
                  text={speaker.name}
                  className="text-white my-4 text-2xl md:text-6xl"
                />
                <div className="text-white">
                  <ReactMarkdown>{speaker.description.markdown}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="events h-auto w-full" id="events">
          <div className="container w-[80%] mx-auto">
            <AnimatedLine
              text="Our Events"
              className="text-white text-2xl lg:text-[3rem]"
            />
            <div className="mt-12">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                <TimelineEvent event={events[0]} />
                <TimelineEvent event={events[5]} />
                <TimelineEvent event={events[2]} />
                <TimelineEvent event={events[4]} />
                <TimelineEvent event={events[1]} />
                <TimelineEvent event={events[3]} />
              </ol>
            </div>
          </div>
        </section>

        <section className="sponsers-section my-24">
          <div className="w-full general Sponsers">
            <div className="w-[80%] mx-auto">
              <AnimatedLine
                text="Community Partners"
                className="text-white text-xl md:text-4xl"
              />
            </div>
            <Sponsers sponsers={[...communityPartners, ...communityPartners]} />
          </div>
          <div className="w-full general Sponsers">
            <div className="w-[80%] mx-auto">
              <AnimatedLine
                text="Media Partners"
                className="text-white text-xl md:text-4xl"
              />
            </div>
            <Sponsers sponsers={[...mediaPartners, ...mediaPartners]} reverse />
          </div>
        </section>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </Layout>
  );
};

export default Techelons;

export const getStaticProps: GetStaticProps = async () => {
  const { event }: { event: IEvent[] } = await graphcms.request(
    `
    query Events {
      event {
        id,
        description{
          markdown
        },
        caption {
          markdown
        }
        deadline,
        eventHeading,
        date,
        venue,
        minTeamSize,
        maxTeamSize,
        poster {
          url
        }
        participationType
        slug
        whatsAppGroupUrl
        tagline
        eventSponsers {
          url
        }
      }
    }
  `
  );

  const { speakers }: { speakers: ISpeaker[] } = await graphcms.request(`
  query Speakers {
    speakers {
      id
      name
      description {
        markdown
      }
      speakerImg {
        url
      }
    }
  }
  
  `);

  const { communityPartners }: { communityPartners: IPartner[] } =
    await graphcms.request(
      `
    query MyQuery {
      communityPartners {
        img{
          url
        }
      }
    }
    `
    );

  const { mediaPartners }: { mediaPartners: IPartner[] } =
    await graphcms.request(
      `
    query MyQuery {
      mediaPartners {
        img{
          url
        }
      }
    }
    `
    );

  return {
    props: {
      events: event,
      speaker: speakers[0],
      communityPartners,
      mediaPartners,
    },
  };
};
