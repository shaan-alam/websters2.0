import Navbar from "@/components/Navbar";
import styles from "../styles/Techelons.module.scss";
import AnimatedText from "@/components/AnimatedLine";
import Layout from "@/components/Layout";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei/core";
import Model from "@/components/Model";
import Button from "@/components/Button";
import AnimatedLine from "@/components/AnimatedLine";
import sanityClient from "@/lib/sanityClient";
import { GetStaticProps } from "next";
import TimelineEvent from "@/components/TimelineEvent";
import AnimatedImage from "@/components/AnimatedImage";
import Footer from "@/components/Footer";
import StarsCanvas from "@/components/StarsCanvas";
import Sponsers from "@/components/Sponsers";
import Model2 from "@/components/Model2";

export interface IEvent {
  name: string;
  poster: string;
  slug: string;
  description: string | null;
  deadline: string;
  minTeamSize: number;
  maxTeamSize: number;
  eventDate: string;
  venue: string;
  participationType: "individual" | "team";
}

const Techelons = ({ events }: { events: IEvent[] }) => {
  console.log(events);
  return (
    <Layout>
      <Navbar />
      <div className="wrapper">
        <section className={styles.wrapper}>
          {/* <span className="absolute left-0 h-[300px] w-[200px] bg-blue-800 rounded-full md:w-[900px] blur-[350px] md:blur-[400px]"></span>
          <span className="absolute top-[50rem] h-[100px] w-[200px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute top-[100rem] right-10 h-[500px] w-[200px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[150rem] w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[200rem] w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[250rem] w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[300rem] right-10 w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[350rem] left-10 w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[400rem] right-10 w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[450rem] left-10 w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[500rem] right-10 w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[550rem] left-10 w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span>
          <span className="absolute h-[300px] top-[600rem] right-10 w-[300px] rounded-full md:w-[600px] bg-blue-700 blur-[300px] md:blur-[500px]"></span> */}
          <StarsCanvas />
          <div className="lg:flex bg-wrapper">
            <div className="col-left lg:w-3/4 w-full">
              <div className="ml-8 lg:ml-20 relative z-20">
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
            <div className="h-[50vh] col-right lg:h-screen w-full cursor-grabbing  relative z-10">
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
        <section className="h-auto flex flex-col justify-center about-techelons">
          <div className="w-[80%] mx-auto">
            <div className="block md:grid grid-cols-2 gap-12 my-24">
              <div className="left-col my-4 md:my-0">
                <AnimatedText
                  text="ABOUT TECHELONS"
                  className="text-white text-2xl lg:text-[3rem]"
                />
                <div className="text-gray-300">
                  <p className="my-4 leading-8 relative z-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus quod iusto eligendi ab repellat aut vel officiis!
                    Itaque vel neque possimus, molestias consectetur cum in
                    ratione sequi error natus molestiae distinctio facere
                    accusamus, minima facilis autem sint unde! Delectus, quam!
                  </p>
                  <p className="my-4 leading-8 relative z-20">
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

        <section className="events h-auto w-full">
          <div className="container w-[80%] mx-auto">
            <AnimatedLine
              text="Our Events"
              className="text-white text-2xl lg:text-[3rem]"
            />
            <div className="mt-12">
              <ol className="relative border-l border-gray-200 dark:border-gray-700">
                {events.map((event) => (
                  <TimelineEvent event={event} key={event.slug} />
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="sponsers-section my-24">
          <div className="w-[80%] mx-auto">
            <AnimatedLine
              text="Title Sponsers"
              className="text-white my-4 text-2xl md:text-4xl"
            />
            <div className="md:grid grid-cols-2 gap-8 my-6">
              <div className="col-left">
                <AnimatedImage
                  src="https://pngimg.com/uploads/microsoft/microsoft_PNG10.png"
                  alt=""
                  className="my-8"
                />
              </div>
              <div className="col-right">
                <AnimatedLine
                  text="Microsoft"
                  className="text-white my-4 text-xl"
                />
                <p className="text-white leading-7 font-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem deserunt iure cupiditate consequuntur, tenetur
                  rerum a corrupti assumenda perspiciatis reiciendis deleniti
                  aspernatur totam ipsa! Nihil mollitia commodi voluptatem
                  optio.
                </p>
              </div>
            </div>
            <div className="md:flex-row flex flex-col-reverse my-24">
              <div className="col-right w-full md:w-1/2">
                <AnimatedLine
                  text="Microsoft"
                  className="text-white my-4 text-xl"
                />
                <p className="text-white leading-7 font-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem deserunt iure cupiditate consequuntur, tenetur
                  rerum a corrupti assumenda perspiciatis reiciendis deleniti
                  aspernatur totam ipsa! Nihil mollitia commodi voluptatem
                  optio. Sequi autem deserunt iure cupiditate consequuntur,
                  tenetur rerum a corrupti assumenda perspiciatis reiciendis
                  deleniti aspernatur totam ipsa! Nihil mollitia commodi
                  voluptatem optio.
                </p>
              </div>
              <div className="col-left w-full md:w-1/2 md:mr-8">
                <AnimatedImage
                  src="https://pngimg.com/uploads/microsoft/microsoft_PNG10.png"
                  alt=""
                  className="my-24"
                />
              </div>
            </div>
          </div>
          <div className="w-full general Sponsers">
            <div className="w-[80%] mx-auto">
              <AnimatedLine
                text="General Sponsers"
                className="text-white text-xl md:text-4xl my-4"
              />
            </div>
            <Sponsers />
            <Sponsers reverse={true} />
          </div>
        </section>

        <section className="speakers-section my-24">
          <div className="w-[80%] mx-auto">
            <AnimatedLine
              text="Speakers"
              className="text-white my-4 text-2xl md:text-4xl"
            />
            <div className="md:grid grid-cols-2 gap-8 my-6">
              <div className="col-left">
                <AnimatedImage
                  src="https://user-images.githubusercontent.com/48273777/223651590-66506077-626d-4174-858b-fdb25f5ab73e.png"
                  alt=""
                  className="my-8 mx-auto speaker-img h-[360px] w-[360px] object-cover"
                />
              </div>
              <div className="col-right">
                <AnimatedLine
                  text="Kumar Amrendram"
                  className="text-white my-4 text-2xl md:text-4xl"
                />
                <p className="text-white leading-7 font-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem deserunt iure cupiditate consequuntur, tenetur
                  rerum a corrupti assumenda perspiciatis reiciendis deleniti
                  aspernatur totam ipsa! Nihil mollitia commodi voluptatem
                  optio. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Sequi autem deserunt iure cupiditate consequuntur,
                  tenetur rerum a corrupti assumenda perspiciatis reiciendis
                  deleniti aspernatur totam ipsa! Nihil mollitia commodi
                  voluptatem optio. Sequi autem deserunt iure cupiditate
                  consequuntur, tenetur rerum a corrupti assumenda perspiciatis
                  reiciendis deleniti aspernatur totam ipsa! Nihil mollitia
                  commodi voluptatem optio.
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row my-24">
              <div className="col-right w-full md:w-1/2 md:mr-8">
                <AnimatedLine
                  text="Kumar Amrendram"
                  className="text-white my-4 text-2xl md:text-4xl"
                />
                <p className="text-white leading-7 font-secondary">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi autem deserunt iure cupiditate consequuntur, tenetur
                  rerum a corrupti assumenda perspiciatis reiciendis deleniti
                  aspernatur totam ipsa! Nihil mollitia commodi voluptatem
                  optio. Sequi autem deserunt iure cupiditate consequuntur,
                  tenetur rerum a corrupti assumenda perspiciatis reiciendis
                  deleniti aspernatur totam ipsa! Nihil mollitia commodi
                  voluptatem optio.
                </p>
              </div>
              <div className="col-left w-full md:w-1/2">
                <AnimatedImage
                  src="https://user-images.githubusercontent.com/48273777/223651590-66506077-626d-4174-858b-fdb25f5ab73e.png"
                  alt=""
                  className="my-8 mx-auto speaker-img h-[360px] w-[360px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Layout>
  );
};

export default Techelons;

export const getStaticProps: GetStaticProps = async () => {
  const events = await sanityClient.fetch(`*[_type == "event"] {
    name,
    "poster": poster.asset->url,
      "slug": slug.current,
      deadline,
      minTeamSize,
      maxTeamSize,
      eventDate,
      venue,
      description,
      participationType
  }`);

  return {
    props: {
      events,
    },
  };
};
