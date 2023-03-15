/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import TeamCard from "@/components/TeamCard";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <Layout>
      <Navbar />
      <div className="max-w-5xl text-white mx-auto container px-4">
        <div className="">
          <div className="p-10 flex flex-col md:flex-row gap-10 items-center">
            <img src="./logo.svg" alt="Techelons" />
            <div className="text-center">
              <h1 className="md:text-4xl mb-4 text-3xl font-black">About Websters</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo alias odio tempore quos, pariatur numquam maiores
                facere, veniam dicta culpa corporis qui, enim quasi aliquid
                error molestiae praesentium dolorem. Nihil.
              </p>
            </div>
          </div>
          <div className="p-10 flex gap-10 flex-col md:flex-row-reverse">
            <img src="./techelons-logo.svg" alt="" className="w-96" />
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl mb-4 font-black">About Techelons</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                sunt nostrum quo similique! Sint, eius minima architecto ea,
                veritatis accusamus nulla nemo a similique iure veniam
                blanditiis consequuntur nisi odit?
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 text-center my-10">
          <h1 className="text-5xl font-black">Council</h1>
          <div className="md:grid grid-cols-3 gap-8 my-8">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};



export default About;
