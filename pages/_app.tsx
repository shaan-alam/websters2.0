import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import ContextProvider from "@/context/GlobalContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ContextProvider>
      <AnimatePresence mode="wait" initial={true}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </ContextProvider>
  );
}
