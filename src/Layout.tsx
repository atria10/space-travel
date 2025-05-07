import { useLocation } from "@solidjs/router";
import { createMemo } from "solid-js";
import Navbar from "./components/Navbar";
import styles from "./modules/Layout.module.css";

const backgrounds: Record<string, string> = {
  "/home": "homeBackground",
  "/destinations": "destinationBackground",
  "/crew": "crewBackground",
  "/technology": "technologyBackground",
};

export const Layout = (props: any) => {
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  return (
    <div
      id="layout"
      class={`${styles.imageBackground} ${styles[backgrounds[pathname()]]}`}
    >
      <Navbar />
      {props.children}
    </div>
  );
};
