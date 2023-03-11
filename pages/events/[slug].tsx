import { useState, useEffect, useContext } from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import sanityClient from "@/lib/sanityClient";
import { GetStaticProps } from "next";
import { IEvent } from "../techelons";
import AnimatedLine from "@/components/AnimatedLine";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "@/components/Layout";
import styles from "@/styles/Event.module.scss";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "@/firebase";
import Button from "@/components/Button";
import {
  FaCalendar,
  FaClock,
  FaUsers,
  FaGlobe,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Context, ContextType } from "@/context/GlobalContext";
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import FormInput from "@/components/FormInput";
import { useRouter } from "next/router";
import { v4 } from "uuid";
import OverlappingAvatars from "@/components/OverlappingAvatars";
import Moment from "react-moment";
import TeamModal from "@/components/Modal/Team";
import ThankYou from "@/components/Modal/ThankYou";

const Event = ({ event }: { event: IEvent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);
  const [impUsers, setImpUsers] = useState<
    { name: string; avatar: string }[] | null
  >(null);
  const [totalRegisteredUsers, setTotalRegisteredUsers] = useState(0);
  const [successModal, setSuccessModal] = useState(false);

  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(
    Context
  ) as ContextType;

  console.log("user", user);

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  const checkIfAlreadyRegistered = (email: string) => {
    const eventQuery = query(
      collection(db, event.name),
      where("email", "==", email)
    );
    return getDocs(eventQuery).then((snap) => {
      return snap.docs.map((doc) => ({ ...doc.data() }));
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      checkIfAlreadyRegistered(user?.email as string).then((value) => {
        setUserRegistered(value.length > 0);
      });
    } else {
      console.log("firebase is shit");
    }
  }, [isLoggedIn]);

  const getImpUsers = async () => {
    const docsRef = collection(db, event.name);
    const docsSnap = await getDocs(docsRef);

    let importantUsers: { avatar: string; name: string }[] = [];

    docsSnap.forEach((doc) => {
      importantUsers.push({
        avatar: doc.data().avatar as string,
        name: doc.data().name as string,
      });
    });

    setTotalRegisteredUsers(importantUsers.length);
    setImpUsers(
      importantUsers.length > 3 ? importantUsers.slice(0, 3) : importantUsers
    );
  };

  useEffect(() => {
    getImpUsers();
  }, []);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((user) => {
      const {
        user: { email, displayName, photoURL },
      } = user;

      let newUser = {
        email: email as string,
        name: displayName as string,
        avatar: photoURL as string,
      };

      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(newUser));
        setIsLoggedIn(true);
        setUser(newUser);
      }
    });
  };
  return (
    <Layout>
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

      <div className="w-[90%] mx-auto text-white">
        <div className="md:flex gap-8">
          <div className="col-left w-full md:w-[65%]">
            <AnimatedLine
              text={event.name || ""}
              className="md:text-6xl text-2xl mt-28 text-white"
            />
            {isLoggedIn && userRegistered && (
              <div className="my-4 w-full text-green-700 bg-green-300 px-4 py-2 font-semibold font-secondary md:w-1/2 rounded-sm">
                😀 You have registered for {event.name}
              </div>
            )}
            <div className="mt-12">
              <BlockContent blocks={event.description} />
            </div>

            {!isLoggedIn && (
              <div
                onClick={() => googleLogin()}
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

            {isLoggedIn && !userRegistered && user && (
              <>
                <AnimatedLine
                  text="Registration"
                  className="md:text-6xl text-2xl mt-28 mb-6 text-white"
                />
                <Formik
                  initialValues={{
                    name: user?.name,
                    email: user?.email,
                    course: "",
                    college: "",
                    rollNo: "",
                    members: [
                      {
                        id: v4(),
                        name: user?.name,
                        email: user?.email,
                        isLeader: true,
                      },
                    ],
                  }}
                  validationSchema={yup.object({
                    name: yup.string().required("First Name is required"),
                    email: yup
                      .string()
                      .email("Please provide a valid email")
                      .required("Email is Required"),
                    course: yup.string().required("Course Name is required"),
                    college: yup.string().required("College Name is required"),
                    rollNo: yup.string().required("Roll No is required"),
                    phone: yup.number().required("Phone number is required"),
                    members: yup.array().of(
                      yup.object().shape({
                        id: yup.string(),
                        name: yup.string().required("Name is required"),
                        email: yup.string().required("Email is required"),
                        isLeader: yup.boolean(),
                      })
                    ),
                  })}
                  onSubmit={(values, { resetForm }) => {
                    const dbRef = collection(db, event.name);
                    const registration = { ...values, avatar: user?.avatar };

                    addDoc(dbRef, registration).then((doc) => console.log(doc));
                    setUserRegistered(true);
                    setShow(true);

                    resetForm();
                    getImpUsers();
                    setSuccessModal(true);
                  }}
                >
                  {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                      <div className="relative w-full">
                        <div className="md:grid grid-cols-3 gap-6">
                          <FormInput
                            type="text"
                            placeholder="John Doe"
                            name="name"
                            formik={formik}
                            label="Name"
                            disabled={true}
                          />
                          <FormInput
                            type="email"
                            placeholder="For ex: johndoe@gmail.com"
                            name="email"
                            formik={formik}
                            label="Email"
                            disabled={true}
                          />
                          <FormInput
                            type="phone"
                            placeholder="555-555-5555"
                            name="phone"
                            formik={formik}
                            label="Phone"
                          />
                        </div>
                        <div className="md:grid grid-cols-3 gap-6 my-6">
                          <FormInput
                            type="text"
                            placeholder="Roll No"
                            name="rollNo"
                            formik={formik}
                            label="Roll No"
                          />
                          <FormInput
                            type="text"
                            placeholder="Course"
                            name="course"
                            formik={formik}
                            label="Course"
                          />
                          <FormInput
                            type="text"
                            placeholder="College"
                            name="college"
                            formik={formik}
                            label="College"
                          />
                        </div>
                        <div>
                          <h1 className="text-white mb-6">Team Details</h1>
                          <div className="mt-4" key={v4()}>
                            {formik.values.members.length < 2 && (
                              <a
                                href="#!"
                                onClick={() => setIsOpen(true)}
                                className="px-4 py-2 bg-[#121212] text-white text-sm inline-block rounded-md"
                              >
                                Add a team member
                              </a>
                            )}
                            {isOpen && (
                              <TeamModal
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                                addMember={(name: string, email: string) => {
                                  formik.setValues({
                                    ...formik.values,
                                    members: [
                                      ...formik.values.members,
                                      {
                                        id: v4(),
                                        name,
                                        email,
                                        isLeader: false,
                                      },
                                    ],
                                  });
                                }}
                              />
                            )}
                          </div>
                        </div>
                        <div className="members md:grid grid-cols-3 gap-4 my-6">
                          {formik.values.members.map((member) => (
                            <div
                              className="member p-4 my-6 md:my-0 rounded-md bg-[#121212]"
                              key={v4()}
                            >
                              <div className="header flex justify-end">
                                {!member.isLeader && (
                                  <a
                                    href="#!"
                                    className="text-sm p-2 rounded-full hover:bg-[#333]"
                                    onClick={() => {
                                      formik.setValues({
                                        ...formik.values,
                                        members: formik.values.members.filter(
                                          (m) => m.id !== member.id
                                        ),
                                      });
                                    }}
                                  >
                                    <FaTrash className="text-red-600" />
                                  </a>
                                )}
                              </div>
                              {member.isLeader && (
                                <div className="flex text-sm text-gray-400 items-center mb-2">
                                  <FaUser className="text-green-400" />
                                  &nbsp;Leader
                                </div>
                              )}
                              <h1 className="text-white mb-2 font-secondary">
                                {member.name}
                              </h1>
                              <h1 className="text-gray-400 mb-2 font-secondary text-sm">
                                {member.email}
                              </h1>
                            </div>
                          ))}
                        </div>
                        <Button className="my-8">Register</Button>
                      </div>
                    </form>
                  )}
                </Formik>
              </>
            )}
          </div>
          {successModal && (
            <ThankYou isOpen={successModal} setIsOpen={setSuccessModal} />
          )}
          <div className="col-right mt-12 md:mt-28 w-full md:w-[35%]">
            <h1 className="mb-4 text-2xl">Details:</h1>
            <div className={styles["live-status-block"]}>
              <div className="block">
                <h1 className="text-lg font-medium font-secondary text-white">
                  {totalRegisteredUsers} Registration
                  {totalRegisteredUsers > 1 ? "s" : ""}
                </h1>
                <OverlappingAvatars
                  amIRegistered={userRegistered}
                  impUsers={impUsers}
                  totalRegisteredUsers={totalRegisteredUsers}
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex items-center my-6">
                  <FaCalendar className="text-gray-400 mr-4" size={25} />
                  <div>
                    <h1 className="text-lg font-medium font-secondary text-white">
                      Deadline
                    </h1>
                    <p className="text-gray-400 text-sm">
                      <Moment from={Date.now()}>{event.deadline}</Moment>
                    </p>
                  </div>
                </div>
                <div className="flex items-center my-6">
                  <FaClock className="text-gray-400 mr-4" size={25} />
                  <div>
                    <h1 className="text-lg font-medium font-secondary text-white">
                      Event Date
                    </h1>
                    <p className="text-gray-400 text-sm">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center my-4">
                  <FaUsers className="text-gray-400 mr-4" size={25} />
                  <div>
                    <h1 className="text-lg font-medium font-secondary text-white">
                      Team size
                    </h1>
                    <p className="text-gray-400 text-sm">
                      {event.minTeamSize} - {event.maxTeamSize}
                    </p>
                  </div>
                </div>
                <div className="flex items-center my-4">
                  <FaGlobe className="text-gray-400 mr-4" size={25} />
                  <div>
                    <h1 className="text-lg font-medium font-secondary text-white">
                      Venue
                    </h1>
                    <p className="text-gray-400 text-sm">{event.venue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      description
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

// secret - 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
// ID - 198112982639-f7hh4a858pj90tg4gmuqj86u994thar6.apps.googleusercontent.com
