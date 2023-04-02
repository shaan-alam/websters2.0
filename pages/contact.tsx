import { LegacyRef, useRef, useState } from "react";
import { AnimatedLine, Button, FormInput, Navbar } from "@/components";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "@/styles/Contact.module.scss";
import { Formik } from "formik";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef<any>();
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar />
      <div className="w-[80%] mx-auto my-24">
        <div className="lg:grid grid-cols-2 gap-24">
          <div className="col-left">
            <AnimatedLine
              text="Get in touch with us!"
              className="text-white text-xl sm:text-4xl md:text-5xl uppercase"
            />
            <p className="text-gray-400 mt-4 text-xl w-full md:w-[80%]">
              If you have any query or doubt, feel free to contact us. Our
              socials are mentioned below 👇
            </p>
            <div className="socials mt-24">
              <a
                href="https://www.instagram.com/websters.shivaji/"
                rel="noreferrer"
                target="_blank"
              >
                <div className={styles.social}>
                  <FaInstagram color="white" size={30} />
                  &nbsp;/websters.shivaji
                </div>
              </a>
            </div>
            <div className="socials my-4">
              <a
                href="https://www.linkedin.com/company/websters-shivaji-college/mycompany/"
                rel="noreferrer"
                target="_blank"
              >
                <div className={styles.social}>
                  <FaLinkedin color="white" size={30} />
                  &nbsp;/websters.shivaji
                </div>
              </a>
            </div>
          </div>
          <div className="my-12 md:my-0 col-right">
            <div className="contact-section p-12 bg-[#121212]">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                validationSchema={yup.object({
                  name: yup.string().required("Name is required"),
                  email: yup
                    .string()
                    .email("Please provide a valid email!")
                    .required("Email is required"),
                  message: yup.string(),
                })}
                onSubmit={(_, { resetForm }) => {
                  setLoading(true);
                  emailjs
                    .sendForm(
                      "service_mkrgmwt",
                      "template_3e0qnag",
                      formRef?.current,
                      "o4SG69K88IyF7SZs7"
                    )
                    .then(() => {
                      setLoading(false);
                      resetForm();
                      toast.success("We've recieved your message!");
                    });
                }}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit} ref={formRef}>
                    <FormInput
                      formik={formik}
                      label="Name"
                      name="name"
                      placeholder="John Doe"
                      type="text"
                    />
                    <FormInput
                      formik={formik}
                      label="Email"
                      name="email"
                      placeholder="John Doe"
                      type="Email"
                    />
                    <FormInput
                      formik={formik}
                      label="Message"
                      name="message"
                      placeholder="Your Message..."
                      type="textarea"
                    />
                    <Button type="button">&nbsp; Send Message</Button>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <ToastContainer position="bottom-right" theme="dark" />
      </div>
    </>
  );
};

export default Contact;
