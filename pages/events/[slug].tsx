import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import sanityClient from "@/sanityClient";
import { GetStaticProps } from "next";
import { IEvent } from "../techelons";
import AnimatedLine from "@/components/AnimatedLine";

const Event = ({ event }: { event: IEvent }) => {
  return (
    <>
      <Navbar />
      <div className="image-container-single relative overflow-hidden">
        <motion.div
          initial={{ y: 100, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="thumbnail-single"
        >
          <div className="frame-single">
            <img src={event.poster} alt={event.name} className="w-full" />
          </div>
        </motion.div>
      </div>
      <div className="w-[80%] mx-auto">
        <AnimatedLine text={event.name} className="text-4xl mt-28 text-white" />
        <p className="text-white leading-7 font-secondary my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda iure quis facilis, voluptate totam, nisi, sint beatae
          impedit ullam distinctio veritatis a aspernatur commodi? Quisquam
          officia maiores neque quas!
        </p>
        <p className="text-white leading-7 font-secondary my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda iure quis facilis, voluptate totam, nisi, sint beatae
          impedit ullam distinctio veritatis a aspernatur commodi? Quisquam
          officia maiores neque quas! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quisquam eligendi molestiae, iusto modi quas ea
          doloremque ullam repudiandae perferendis cumque sapiente aliquam illo
          beatae mollitia cum necessitatibus deleniti dolorem? Pariatur!
        </p>
        <p className="text-white leading-7 font-secondary my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda iure quis facilis, voluptate totam, nisi, sint beatae
          impedit ullam distinctio veritatis a aspernatur commodi? Quisquam
          officia maiores neque quas!
        </p>
        <p className="text-white leading-7 font-secondary my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda iure quis facilis, voluptate totam, nisi, sint beatae
          impedit ullam distinctio veritatis a aspernatur commodi? Quisquam
          officia maiores neque quas!
        </p>
      </div>
    </>
  );
};

export default Event;

export const getStaticProps: GetStaticProps = async (context) => {
  const events =
    await sanityClient.fetch(`*[_type == "event" && slug.current == "${context.params?.slug}"] {
    name,
    description,
    "poster": poster.asset->url,  
    slug,
  }`);

  return {
    props: {
      event: events[0],
    },
  };
};

export const getStaticPaths = async () => {
  const events = (await sanityClient.fetch(`*[_type == "event"] {
    "slug": slug.current
  }`)) as Array<IEvent>;

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};
