import { motion } from "framer-motion";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <>
      {children}
      <motion.div
        className="fixed inset-0 bg-[#000] z-[50] origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed inset-0 bg-[#000] z-[50] origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Layout;
