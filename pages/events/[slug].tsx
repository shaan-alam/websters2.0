import { useState, useEffect, useContext } from "react";
import {
  AnimatedLine,
  EventDetails,
  Footer,
  Layout,
  Navbar,
  RegistrationForm,
  Sponsers,
  ThankYou,
} from "@/components";
import styles from "@/styles/Event.module.scss";
import { motion } from "framer-motion";
import sanityClient from "@/lib/sanityClient";
import { GetStaticProps } from "next";
import { IEvent } from "../techelons";
import BlockContent from "@sanity/block-content-to-react";
import { addDoc, CollectionReference, DocumentData } from "firebase/firestore";
import { Context, ContextType } from "@/context/GlobalContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  checkIfUserAlreadyRegistered,
  fetchRegistrations,
  getImpUsers,
  googleLogin,
} from "@/helpers";

const Event = ({ event }: { event: IEvent }) => {
  const [userRegistered, setUserRegistered] = useState(false);
  const [impUsers, setImpUsers] = useState<
    { name: string; avatar: string }[] | null
  >(null);
  const [totalRegisteredUsers, setTotalRegisteredUsers] = useState(0);
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const [teamModal, setTeamModal] = useState(false);
  const [teamError, setTeamError] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(
    Context
  ) as ContextType;

  const registerForEvent = (
    dbRef: CollectionReference<DocumentData>,
    registration: {
      avatar: string | undefined;
      name: string | undefined;
      email: string | undefined;
      course: string;
      college: string;
      rollNo: string;
      members: {
        id: string;
        name: string | undefined;
        email: string | undefined;
        isLeader: boolean;
      }[];
    }
  ) => {
    addDoc(dbRef, registration).then((doc) => console.log(doc));
    setUserRegistered(true);

    getImpUsers({ event, setImpUsers, setTotalRegisteredUsers });
    setSuccessModal(true);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      checkIfUserAlreadyRegistered({
        email: user?.email as string,
        event,
      }).then((value) => {
        setUserRegistered(value.length > 0);
        setIsLoading(false);
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getImpUsers({ event, setImpUsers, setTotalRegisteredUsers });
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      const isWebstersAdmin = JSON.parse(
        localStorage.getItem("isWebstersAdmin") || "{}"
      );
      setIsAdmin(isWebstersAdmin);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <span className="absolute top-[30rem] right-0 hidden sm:block h-[300px] w-[200px] bg-blue-800 rounded-full md:w-[900px] blur-[350px] md:blur-[400px]"></span>
      <span className="absolute top-[25rem] hidden sm:block h-[200px] w-[200px] bg-blue-800 rounded-full md:w-[900px] blur-[350px] md:blur-[400px]"></span>
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

      <div className="w-[90%] mx-auto text-white">
        <div className="md:flex gap-8">
          <div className="col-left w-full md:w-[65%]">
            <AnimatedLine
              text={event.name || ""}
              className="md:text-6xl text-2xl mt-28 text-white"
            />
            {isLoggedIn && userRegistered && (
              <div className="my-4 w-full text-green-700 bg-green-300 px-4 py-2 font-semibold font-secondary rounded-sm">
                You have registered for {event.name} 😀
              </div>
            )}
            {new Date() > new Date(event.deadline) && (
              <div className="my-4 w-full text-white bg-red-600 px-4 py-2 font-semibold font-secondary rounded-sm">
                Registrations closed!! 😥
              </div>
            )}
            {isAdmin && (
              <div>
                <a
                  href="#!"
                  className={styles.download_btn}
                  onClick={() => fetchRegistrations(event.name)}
                >
                  Download Registrations
                </a>
              </div>
            )}
            <div className="mt-12 font-secondary">
              <BlockContent blocks={event.description} />
            </div>

            {loading && (
              <div>
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                  <div className="md:grid grid-cols-3 gap-8">
                    <Skeleton height={25} />
                    <Skeleton height={25} />
                    <Skeleton height={25} />
                  </div>
                  <div className="md:grid grid-cols-3 gap-8 md:my-6">
                    <Skeleton height={25} />
                    <Skeleton height={25} />
                    <Skeleton height={25} />
                  </div>
                </SkeletonTheme>
              </div>
            )}

            {new Date(event.deadline) > new Date() && (
              <>
                {!userRegistered && (
                  <>
                    <AnimatedLine
                      text="Registration"
                      className="md:text-6xl text-2xl mt-28 mb-2 text-white"
                    />
                    {!isLoggedIn && (
                      <p className="text-gray-400 mb-8">
                        You need to login with Google in order to Register for
                        the events
                      </p>
                    )}
                  </>
                )}
                {!isLoggedIn && (
                  <div
                    onClick={() => googleLogin({ setIsLoggedIn, setUser })}
                    className="my-8 cursor-pointer flex items-center justify-between font-secondary w-[220px] bg-[#fff] text-gray-800 font-bold px-4 py-2 rounded-md"
                  >
                    <img
                      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
                      alt=""
                      className="w-6 h-6"
                    />
                    Login with Google
                  </div>
                )}
                {isLoggedIn && !loading && !userRegistered && user && (
                  <RegistrationForm
                    event={event}
                    registerForEvent={registerForEvent}
                    setSuccessModal={setSuccessModal}
                    setTeamError={setTeamError}
                    setTeamModal={setTeamModal}
                    teamError={teamError}
                    teamModal={teamModal}
                  />
                )}
              </>
            )}
            <AnimatedLine
              text="Sponsers"
              className="md:text-6xl text-2xl mt-28 mb-6 text-white"
            />
          </div>

          {new Date(event.deadline) > new Date() && (
            <div className="col-right mt-12 md:mt-28 w-full md:w-[35%]">
              <EventDetails
                amIRegistered={userRegistered}
                event={event}
                impUsers={impUsers}
                totalRegisteredUsers={totalRegisteredUsers}
              />
            </div>
          )}
        </div>
        {successModal && (
          <ThankYou
            isOpen={successModal}
            setIsOpen={setSuccessModal}
            title="Thank You!"
          />
        )}
      </div>
      <Sponsers />

      <Footer />
    </Layout>
  );
};

export default Event;

export const getStaticProps: GetStaticProps = async (context) => {
  const events =
    await sanityClient.fetch(`*[_type == "event" && slug.current == "${context.params?.slug}"] {
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
