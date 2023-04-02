import { useContext, useState } from "react";
import AnimatedLine from "@/components/AnimatedLine";
import { Formik, useFormik } from "formik";
import { Context, ContextType } from "@/context/GlobalContext";
import { v4 } from "uuid";
import * as yup from "yup";
import { IEvent } from "@/pages/techelons";
import {
  collection,
  CollectionReference,
  DocumentData,
} from "firebase/firestore";
import { db } from "@/firebase";
import FormInput from "@/components/FormInput";
import { FaTrash, FaUser } from "react-icons/fa";
import Button from "@/components/Button";
import TeamModal from "@/components/Modal/Team";

interface IProps {
  event: IEvent;
  teamModal: boolean;
  setTeamModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  teamError: string;
  setTeamError: React.Dispatch<React.SetStateAction<string>>;
  registerForEvent: (
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
  ) => void;
}

const RegistrationForm = ({
  event,
  teamModal,
  setTeamModal,
  teamError,
  setTeamError,
  registerForEvent,
}: IProps) => {
  const { user } = useContext(Context) as ContextType;

  return (
    <div className="mt-8">
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
              avatar: `https://api.dicebear.com/5.x/bottts/svg?seed=${user?.name}`,
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
              avatar: yup.string(),
            })
          ),
        })}
        onSubmit={(values, { resetForm }) => {
          if (
            event.participationType !== "Individual" &&
            values.members.length < event.minTeamSize
          ) {
            const remainingMembers = event.minTeamSize - values.members.length;
            return setTeamError(
              `Please add atleast ${remainingMembers} more team member${
                remainingMembers > 1 ? "s" : ""
              }!`
            );
          } else {
            const dbRef = collection(db, event.eventHeading);
            const registration = { ...values, avatar: user?.avatar };
            registerForEvent(dbRef, registration);
            resetForm();
          }
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
              {event.participationType !== "Individual" && (
                <>
                  <div>
                    <h1 className="text-white text-xl">Team Details</h1>
                    <p className="font-secondary text-gray-400 mt-2 text-sm">
                      Please make sure that you must have a team of{" "}
                      {event.minTeamSize} - {event.maxTeamSize} members.
                    </p>
                    {teamError && (
                      <AnimatedLine
                        className="text-red-600 font-secondary font-bold mt-2"
                        text={teamError}
                        isHeading={false}
                      />
                    )}
                    <div className="mt-6" key={v4()}>
                      {formik.values.members.length < event.maxTeamSize && (
                        <a
                          href="#!"
                          onClick={() => {
                            setTeamModal(true);
                          }}
                          className="px-4 py-2 bg-[#333] text-white text-base inline-block rounded-md"
                        >
                          Add a team member
                        </a>
                      )}
                      {teamModal && (
                        <TeamModal
                          title="Add a Team Member"
                          isOpen={teamModal}
                          setIsOpen={setTeamModal}
                          addMember={(
                            name: string,
                            email: string,
                            avatar: string
                          ) => {
                            formik.setValues({
                              ...formik.values,
                              members: [
                                ...formik.values.members,
                                {
                                  id: v4(),
                                  name,
                                  email,
                                  isLeader: false,
                                  avatar,
                                },
                              ],
                            });
                          }}
                        />
                      )}
                      <div className="members md:grid grid-cols-3 gap-4 my-6">
                        {formik.values.members.map((member) => (
                          <div
                            className="member p-4 my-6 md:my-0 rounded-md bg-[#333]"
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
                              <div className="flex text-base text-gray-300 items-center mb-2">
                                <FaUser className="text-green-500" />
                                &nbsp;Leader
                              </div>
                            )}
                            <img
                              src={member.avatar}
                              className="rounded-full h-20 w-20 my-4"
                            />
                            <h1 className="text-white mb-2 font-primary text-3xl">
                              {member.name}
                            </h1>
                            <h1 className="text-gray-400 mb-2 font-primary text-lg">
                              {member.email}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
              <Button className="my-8">Register</Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
