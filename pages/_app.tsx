import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <ParallaxProvider>
        <Component {...pageProps} key={router.asPath} />
      </ParallaxProvider>
    </AnimatePresence>
  );
}
