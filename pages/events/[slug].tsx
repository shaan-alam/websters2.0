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
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { Context, ContextType } from "@/context/GlobalContext";
import * as yup from "yup";
import { useFormik } from "formik";
import FormInput from "@/components/FormInput";
import { registerVersion } from "firebase/app";
import { useRouter } from "next/router";
import OverlappingAvatars from "@/components/OverlappingAvatars";

const Event = ({ event }: { event: IEvent }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);
  const [impUsers, setImpUsers] = useState<{ name: string; avatar: string }[]>(
    []
  );
  const [totalRegisteredUsers, setTotalRegisteredUsers] = useState(0);

  const { user, setUser, isLoggedIn, setIsLoggedIn } = useContext(
    Context
  ) as ContextType;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      course: "",
      college: "",
      rollNo: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("First Name is required"),
      email: yup
        .string()
        .email("Please provide a valid email")
        .required("Email is Required"),
      course: yup.string().required("Course Name is required"),
      college: yup.string().required("College Name is required"),
      rollNo: yup.string().required("Roll No is required"),
    }),
    onSubmit: (_, { resetForm }) => {
      submitRegistration();
      resetForm();
    },
  });

  const submitRegistration = () => {
    const dbRef = collection(db, "googler");
    const registration = { ...formik.values, avatar: user.avatar };

    addDoc(dbRef, registration).then((doc) => console.log(doc));
    setUserRegistered(true);
  };

  const checkIfAlreadyRegistered = (email: string) => {
    const eventQuery = query(
      collection(db, 'googler'),
      where("email", "==", email)
    );
    return getDocs(eventQuery).then((snap) => {
      return snap.docs.map((doc) => ({ ...doc.data() }));
    });
  };

  useEffect(() => {
    if (isLoggedIn) {
      console.log("loggeed in ");
      checkIfAlreadyRegistered(user.email).then((value) => {
        console.log(value);
        setUserRegistered(value.length > 0);
      });
    } else {
      console.log("firebase is shit");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const getImpUsers = async () => {
      const docsRef = collection(db, "googler");
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
        importantUsers.length > 3 ? importantUsers.slice(3) : importantUsers
      );
    };

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

        formik.setValues({
          ...formik.values,
          name: displayName as string,
          email: email as string,
        });
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
        <div className="flex gap-8">
          <div className="col-left w-[65%]">
            <AnimatedLine
              text={event.name}
              className="md:text-6xl text-2xl mt-28 text-white"
            />
            {isLoggedIn && userRegistered && (
              <div className="my-4 w-full text-green-900 bg-green-400 px-4 py-2 font-bold font-secondary md:w-1/2 rounded-md">
                😀 You already registered for {event.name}
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

            {isLoggedIn && !userRegistered && (
              <>
                <AnimatedLine
                  text="Registration"
                  className="md:text-6xl text-2xl mt-28 mb-6 text-white"
                />
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative w-full md:w-[50%]">
                    <FormInput
                      type="text"
                      placeholder="John Doe"
                      name="name"
                      formik={formik}
                    />
                    <FormInput
                      type="email"
                      placeholder="For ex: johndoe@gmail.com"
                      name="email"
                      formik={formik}
                    />
                    <FormInput
                      type="text"
                      placeholder="Roll No"
                      name="rollNo"
                      formik={formik}
                    />
                    <FormInput
                      type="text"
                      placeholder="Course"
                      name="course"
                      formik={formik}
                    />
                    <FormInput
                      type="text"
                      placeholder="College"
                      name="college"
                      formik={formik}
                    />
                    <Button>Register</Button>
                  </div>
                </form>
              </>
            )}
          </div>
          <div className="col-right mt-28 w-[35%]">
            <h1 className="mb-4 text-2xl">Live Status</h1>
            <div className="live-status bg-[#121212] rounded-md p-4">
              <div className="live-col-left mr-4">
                <h1 className="text-xl font-bold font-secondary text-white">
                  85 Registrations
                </h1>
                <OverlappingAvatars
                  amIRegistered={userRegistered}
                  impUsers={impUsers}
                  totalRegisteredUsers={totalRegisteredUsers}
                />
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

// secret - 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
// ID - 198112982639-f7hh4a858pj90tg4gmuqj86u994thar6.apps.googleusercontent.com
