import Navbar from "@/components/Navbar";

const Events = () => {
  return (
    <section>
      <Navbar />
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="left-col">
            <p className="my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatem laborum quos hic. Sit quasi doloribus voluptatibus
              ullam? Ducimus, harum, soluta numquam qui placeat, voluptatem iure
              explicabo exercitationem dolorem fuga enim?
            </p>
          </div>
          <div className="right-col">
            <div className="masonry-layout flex flex-row justify-center items-stretch">
              <div className="flex flex-col flex-start stretch">
                <img src="/event.jpeg" className="w-full my-2 rounded-md masonry-tile"  />
                <img src="/event2.jpeg" className="w-full my-2 rounded-md masonry-tile"  />
              </div>
              <div className="-my-24 mx-2">
                <img src="/event3.jpeg" className="w-full my-2 rounded-md masonry-tile"  />
                <img src="/event4.jpg" className="w-full my-2 rounded-md masonry-tile"  />
                <img src="/event5.jpg" className="w-full my-2 rounded-md masonry-tile"  />
              </div>
              <div className="-my-12">
                <img src="/event6.jpg" className="w-full my-2 rounded-md masonry-tile"  />
                <img src="/event7.jpg" className="w-full my-2 rounded-md masonry-tile"  />
                <img src="/event8.jpg" className="w-full my-2 rounded-md masonry-tile"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
