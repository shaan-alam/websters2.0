import { motion } from "framer-motion";
import Head from "next/head";

const Layout = ({
  children,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  title: string;
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <motion.div
        className="fixed inset-0 bg-[#000] z-[100] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed inset-0 bg-[#000] z-[100] origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Layout;
