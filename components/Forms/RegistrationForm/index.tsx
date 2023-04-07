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
import { FaTimes, FaTrash, FaUser } from "react-icons/fa";
import Button from "@/components/Button";
import TeamModal from "@/components/Modal/Team";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import classNames from "classnames";

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
  const [file, setFile] = useState(null);
  const [fileUploadProgress, setFileUploadProgress] = useState(0);
  const [fileUploadError, setFileUploadError] = useState("");
  const [fileURL, setFileURL] = useState("");

  const uploadFile = (e: any) => {
    setFile(e.target.files[0]);

    const storage = getStorage();
    const storageRef = ref(storage, "images/rivers.jpg");

    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFileUploadProgress(progress);
      },
      (error) => {
        setFileUploadError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileURL(downloadURL);
        });
      }
    );
  };

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
          }

          if (event.id === "clfqzvuxi33q40apg4oivz4tm" && !fileURL) {
            return setFileUploadError("Please upload your payment screenshot!");
          }

          const dbRef = collection(db, event.eventHeading);
          const registration = { ...values, avatar: user?.avatar };
          registerForEvent(dbRef, registration);
          resetForm();
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
                            <h1 className="text-white mb-2 font-primary text-2xl">
                              {member.name}
                            </h1>
                            <h1 className="text-gray-400 mb-2 font-secondary">
                              {member.email}
                            </h1>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
              {event.id === "clfqzvuxi33q40apg4oivz4tm" && (
                <div className="mt-12">
                  <h1 className="text-white text-xl">Payment Details</h1>
                  <p className="mt-4 text-gray-400">
                    Pay on shaanalam369@okaxis
                    <span className="text-red-600 font-bold ml-2 text-xl mt-4">
                      *
                    </span>
                  </p>
                  <AnimatedLine
                    text={fileUploadError}
                    className="text-red-600 font-secondary font-bold mt-2"
                    isHeading={false}
                  />
                  <div className="h-[300px] sm:w-[300px]  p-2 rounded-md bg-[#333] my-4 relative">
                    {fileURL && (
                      <a
                        href="#!"
                        className="absolute -top-3 -right-3"
                        onClick={() => {
                          setFileUploadProgress(0);
                          setFileURL("");
                          setFile(null);
                        }}
                      >
                        <FaTimes
                          size={30}
                          className="p-2 bg-gray-600 text-white rounded-full"
                        />
                      </a>
                    )}
                    {!file && (
                      <input
                        type="file"
                        id="upload-file"
                        className="hidden"
                        onChange={uploadFile}
                        accept="image/png, image/gif, image/jpeg, image/jpg"
                      />
                    )}
                    <label htmlFor="upload-file">
                      <div className="cursor-pointer h-full w-full border-dashed border-gray-400 border-2 rounded-md flex flex-col justify-center items-center text-center text-sm text-gray-400 hover:border-white hover:text-white p-12">
                        <p className={classNames(file ? "hidden" : "block")}>
                          Upload your payment screenshot here...
                        </p>
                        {file && fileUploadProgress < 100 && (
                          <>
                            <p className="block mb-2">
                              Uploading {Math.floor(fileUploadProgress)}%
                            </p>
                            <div className="w-full bg-gray-700 h-[2px]">
                              <div
                                className="bg-white h-full"
                                style={{ width: `${fileUploadProgress}px` }}
                              ></div>
                            </div>
                          </>
                        )}
                        {fileUploadProgress === 100 && (
                          <div className="relative">
                            <img src={fileURL} className="w-full" />
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                </div>
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
