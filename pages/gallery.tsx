import { Layout } from "@/components";
import Navbar from "@/components/Navbar";

const Gallery = () => {
  return (
    <Layout>
      <Navbar />
      <div className="w-[80%] mx-auto">
        <div className="gallery">
          <div className="masonry-layout md:flex flex-row justify-center items-stretch mt-20 md:mt-0">
            <div className="flex flex-col flex-start stretch w-full md:w-[33.33%]">
              <img
                src="https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-full my-2"
              />
              <img
                src="https://images.pexels.com/photos/3156381/pexels-photo-3156381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full my-2"
              />
              <img
                src="https://images.pexels.com/photos/3455931/pexels-photo-3455931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full my-2"
              />
            </div>
            <div className="w-full md:w-[33.33%] mx-2">
              <img
                src="https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full my-2"
              />
              <img
                src="https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full my-2"
              />
              <img
                src="https://images.pexels.com/photos/1809703/pexels-photo-1809703.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-full my-2"
              />
            </div>
            <div className="w-full md:w-[33.33%]">
              <img
                src="https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full my-2"
              />
              <img
                src="https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="w-full my-2"
              />
              <img
                src="https://images.pexels.com/photos/7976695/pexels-photo-7976695.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="w-full my-2"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
