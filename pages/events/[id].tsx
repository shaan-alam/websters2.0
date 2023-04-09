import { useState, useEffect, useContext, Fragment } from "react";
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
import { GetStaticProps } from "next";
import { graphcms, IEvent } from "../techelons";
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
import ReactMarkdown from "react-markdown";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Truncate from "react-truncate";
import Suggestions from "@/components/Suggestions";

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
        localStorage.getItem("isWebstersAdmin") || "false"
      );
      setIsAdmin(isWebstersAdmin);
    }
  }, []);

  return (
    <Layout title={`${event.eventHeading} - Techelons'23`}>
      <Navbar />
      <span className="absolute top-[30rem] right-0 hidden sm:block h-[300px] w-[200px] bg-blue-800 rounded-full md:w-[900px] blur-[350px] md:blur-[400px]"></span>
      <span className="absolute top-[25rem] hidden sm:block h-[200px] w-[200px] bg-blue-800 rounded-full md:w-[900px] blur-[350px] md:blur-[400px]"></span>
      <div className="image-container-single relative overflow-hidden w-[90%] mx-auto">
        <div className="frame-single">
          <img
            src={event.poster.url}
            alt={event.eventHeading}
            className="w-[100%] mx-auto"
          />
        </div>
      </div>
      <div className="w-[90%] mx-auto text-white">
        <div className="md:flex">
          <div className="col-left w-full md:w-[65%]">
            <Tab.Group>
              <Tab.List className="p-4 mt-32 md:mr-12 bg-[#121212] rounded-md">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={classNames(
                        "p-4 mr-2 outline-none rounded-md",
                        selected ? "bg-blue-900" : "bg-black"
                      )}
                    >
                      Description
                    </button>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={classNames(
                        "p-4 mr-2 outline-none rounded-md",
                        selected ? "bg-blue-900" : "bg-black"
                      )}
                    >
                      Register
                    </button>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className="bg-[#121212] mt-4 sm:p-8 p-4 md:mr-12 rounded-md">
                <Tab.Panel>
                  <AnimatedLine
                    text={event.eventHeading || ""}
                    className="md:text-6xl text-2xl mt-6 text-white"
                  />
                  {isAdmin && (
                    <div>
                      <a
                        href="#!"
                        className={styles.download_btn}
                        onClick={() => fetchRegistrations(event.eventHeading)}
                      >
                        Download Registrations
                      </a>
                    </div>
                  )}
                  <div className={styles.event_description}>
                    <ReactMarkdown
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            href={props.href}
                            className="text-blue-400"
                            rel="noreferrer"
                            target="_blank"
                          >
                            {props.children}
                          </a>
                        ),
                      }}
                    >
                      {event.description.markdown}
                    </ReactMarkdown>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  {isLoggedIn &&
                    userRegistered &&
                    new Date() < new Date(event.deadline) && (
                      <>
                        <div className="my-4 w-full text-green-700 bg-green-300 pr-8 pl-4 py-4 font-semibold font-secondary rounded-sm">
                          <p className="mb-2">
                            You have registered for {event.eventHeading} 😀
                          </p>
                          <p>
                            Please join this WhatsApp Group -&nbsp;
                            <a
                              rel="noreferrer"
                              target="_blank"
                              href={event.whatsAppGroupUrl}
                              className="text-blue-500 text-sm"
                            >
                              <Truncate lines={1}>
                                {event.whatsAppGroupUrl}
                              </Truncate>
                            </a>
                          </p>
                        </div>
                        <img
                          src="https://media1.giphy.com/media/l3q2wJsC23ikJg9xe/giphy.gif?cid=ecf05e47lb5tj26yzegurat29rfvyihte161pfpg8hp8vnyi&rid=giphy.gif&ct=g"
                          className="w-full"
                        />
                      </>
                    )}

                  {new Date() > new Date(event.deadline) && (
                    <>
                      <div className="my-4 w-full text-white bg-red-600 px-4 py-2 font-semibold font-secondary rounded-sm">
                        Registrations closed!! 😥
                      </div>
                      <img
                        src="https://media4.giphy.com/media/7SF5scGB2AFrgsXP63/giphy.gif?cid=ecf05e47oq2hecesbo9jm264d3ecybty3clryfoy07chvucq&rid=giphy.gif&ct=g"
                        className="w-full"
                      />
                    </>
                  )}
                  {new Date(event.deadline) > new Date() && (
                    <>
                      {!userRegistered && (
                        <>
                          <AnimatedLine
                            text="Registration"
                            className="md:text-6xl text-2xl mt-6 mb-2 text-white"
                          />
                          {!isLoggedIn && (
                            <p className="text-gray-400 mb-8">
                              You need to login with Google in order to Register
                              for the events
                            </p>
                          )}
                        </>
                      )}
                      {!isLoggedIn && (
                        <div
                          onClick={() =>
                            googleLogin({ setIsLoggedIn, setUser })
                          }
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
                      {loading && (
                        <div>
                          <SkeletonTheme
                            baseColor="#202020"
                            highlightColor="#444"
                          >
                            <div className="md:grid grid-cols-3 gap-8">
                              <Skeleton height={35} className="my-3 md:my-0" />
                              <Skeleton height={35} className="my-3 md:my-0" />
                              <Skeleton height={35} className="my-3 md:my-0" />
                            </div>
                            <div className="md:grid grid-cols-3 gap-8 md:my-6">
                              <Skeleton height={35} className="my-3 md:my-0" />
                              <Skeleton height={35} className="my-3 md:my-0" />
                              <Skeleton height={35} className="my-3 md:my-0" />
                            </div>
                          </SkeletonTheme>
                        </div>
                      )}
                    </>
                  )}
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <div className="col-right mt-12 md:mt-28 w-full md:w-[35%]">
            {new Date(event.deadline) > new Date() && (
              <EventDetails
                amIRegistered={userRegistered}
                event={event}
                impUsers={impUsers}
                totalRegisteredUsers={totalRegisteredUsers}
              />
            )}
            <Suggestions currentEvent={event.id} />
          </div>
        </div>
        {successModal && (
          <ThankYou
            isOpen={successModal}
            setIsOpen={setSuccessModal}
            title="Thank You!"
            whatsAppGroupUrl={event.whatsAppGroupUrl}
          />
        )}
      </div>
      {/* <div className="w-[90%] mx-auto">
        <AnimatedLine
          text="Sponsers"
          className="md:text-6xl text-2xl mt-28 mb-6 text-white"
        />
      </div>
      <Sponsers sponsers={event.eventSponsers} /> */}
      <div className="mt-12">
        <Footer />
      </div>
    </Layout>
  );
};

export default Event;

export const getStaticProps: GetStaticProps = async (context) => {
  const { event }: { event: IEvent[] } = await graphcms.request(`
      query Events {
        event(where: {id: "${context.params?.id}"}) {
          id
          description {
            markdown
          }
          caption {
            markdown
          }
          deadline
          eventHeading
          date
          venue
          minTeamSize
          maxTeamSize
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
    `);

  return {
    props: {
      event: event[0],
    },
  };
};

export const getStaticPaths = async () => {
  const { event }: { event: IEvent[] } = await graphcms.request(`
    query Events {
      event() {
        id
        description {
          markdown
        }
        caption {
          markdown
        }
        deadline
        eventHeading
        date
        venue
        minTeamSize
        maxTeamSize
        poster {
          url
        }
        participationType
        slug
        whatsAppGroupUrl
        eventSponsers {
          url
        }
      }
    }
`);

  const paths = event.map((event) => ({
    params: { id: event.id },
  }));

  return {
    paths,
    fallback: false,
  };
};
