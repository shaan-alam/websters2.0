import { useState, useEffect } from "react";
import { Layout, Navbar, PhotoModal } from "@/components";
import { ref, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "@/firebase";
import { v4 } from "uuid";
import LazyImage from "react-lazy-blur-image";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);
  const [photoModal, setPhotoModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  useEffect(() => {
    const imageListRef = ref(storage, "/");
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImages((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const sliceIntoChunks = (arr: string[], chunkSize: number) => {
    const res: Array<string[]> = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }

    return res;
  };

  return (
    <Layout>
      <Navbar />
      <div className="w-[80%] mx-auto">
        {photoModal && (
          <PhotoModal
            isOpen={photoModal}
            setIsOpen={setPhotoModal}
            img={currentImg}
          />
        )}
        <div className="gallery">
          <div className="masonry-layout md:flex flex-row justify-center items-stretch mt-20 md:mt-0">
            <div className="flex flex-col flex-start stretch w-full md:w-[33.33%]">
              {sliceIntoChunks(images, images.length / 3)[0]?.map((img) => (
                <div
                  key={v4()}
                  className="cursor-pointer"
                  onClick={() => {
                    setCurrentImg(img);
                    setPhotoModal(true);
                  }}
                >
                  <LazyImage
                    placeholder="/placeholder.png"
                    uri={img}
                    render={(src) => <img src={src} className="w-full m-4" />}
                  />
                </div>
              ))}
            </div>
            <div className="w-full md:w-[33.33%] mx-4">
              {sliceIntoChunks(images, images.length / 3)[1]?.map((img) => (
                <div key={v4()}>
                  <LazyImage
                    placeholder="/placeholder.png"
                    uri={img}
                    render={(src) => <img src={src} className="w-full m-4" />}
                  />
                </div>
              ))}
            </div>
            <div className="w-full md:w-[33.33%]">
              {sliceIntoChunks(images, images.length / 3)[2]?.map((img) => (
                <div key={v4()}>
                  <LazyImage
                    placeholder="/placeholder.png"
                    uri={img}
                    render={(src) => <img src={src} className="w-full m-4" />}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
