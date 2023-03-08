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
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed inset-0 bg-[#000] z-[50] origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <svg
        className="fixed top-[50%] left-[50%] z-[50] -translate-x-[50%] -translate-y-[50%]"
        width="219"
        height="242"
        viewBox="0 0 219 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_14_104)">
          <motion.path
            d="M35.0323 104.561H0L80.2107 242L97.6311 212.371L35.0323 104.561Z"
            stroke="#fff"
            initial={{ pathLength: 0 }}
            exit={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.path
            initial={{ pathLength: 0 }}
            exit={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.5615 79.1374L89.3997 0L150.084 104.561H178.416L158.89 138.204H114.286L138.981 181.596L184.351 104.561H219L138.981 241.427L45.5615 79.1374ZM79.2538 78.9463L96.6742 108.766H117.54L90.1655 60.9779L79.2538 78.9463Z"
            stroke="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_104">
            <rect width="219" height="242" fill="#111" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="fixed top-[50%] left-[50%] z-[50] -translate-x-[50%] -translate-y-[50%]"
        width="219"
        height="242"
        viewBox="0 0 219 242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_14_104)">
          <motion.path
            d="M35.0323 104.561H0L80.2107 242L97.6311 212.371L35.0323 104.561Z"
            stroke="#fff"
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.path
            initial={{ pathLength: 1 }}
            animate={{ pathLength: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M45.5615 79.1374L89.3997 0L150.084 104.561H178.416L158.89 138.204H114.286L138.981 181.596L184.351 104.561H219L138.981 241.427L45.5615 79.1374ZM79.2538 78.9463L96.6742 108.766H117.54L90.1655 60.9779L79.2538 78.9463Z"
            stroke="#fff"
          />
        </g>
        <defs>
          <clipPath id="clip0_14_104">
            <rect width="219" height="242" fill="#111" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default Layout;
