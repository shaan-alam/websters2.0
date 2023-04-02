import { graphcms, IEvent } from "@/pages/techelons";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Suggestion {
  id: string;
  eventHeading: string;
  poster: {
    url: string;
  };
}

const Suggestions = ({ currentEvent }: { currentEvent: string }) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { event }: { event: IEvent[] } =
        await graphcms.request(`query Events {
        event() {
          id    
          eventHeading
          poster {
            url
          }
        }
      }      
      `);

      setSuggestions(event.filter((e) => e.id !== currentEvent).slice(0, 4));
    };
    fetchEvents();
  }, [currentEvent]);

  return (
    <div className="suggestions-wrapper mt-20">
      <h1 className="mb-4 text-2xl">Check out other events!</h1>
      <div className="suggestions-container sm:grid grid-cols-2 gap-8">
        {suggestions.map((suggestion) => (
          <Link href={`/events/${suggestion.id}`} key={suggestion.id}>
            <div className="event p-4 bg-[#121212] rounded-md mt-6 hover:scale-105 transition-all">
              <img src={suggestion.poster.url} alt="" className="rounded-md" />
              <h1 className="mt-4">{suggestion.eventHeading}</h1>
              <p className="text-gray-400 text-sm mt-2 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                quae!
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
