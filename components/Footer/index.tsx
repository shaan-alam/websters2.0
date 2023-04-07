/* eslint-disable @next/next/no-img-element */
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 bg-[#121212] rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="w-[80%] mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0">
            <img src="/logo.svg" className="h-7 mr-3" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white font-primary">
              WEBSTERS
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/techelons#events"
                className="mr-4 hover:underline md:mr-6"
              >
                Events
              </Link>
            </li>
            <li>
              <Link href="/techelons" className="mr-4 hover:underline md:mr-6 ">
                Techelons
              </Link>
            </li>
            <li>
              <Link href="contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 
            <a href="#" className="hover:underline">
              Websters
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/websters.shivaji"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 hover:text-white"
            >
              <FaInstagram />
              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://www.linkedin.com/company/websters-shivaji-college/mycompany/"
              rel="noreferrer"
              target="_blank"
              className="text-gray-500 hover:text-white"
            >
              <FaLinkedin />
              <span className="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
