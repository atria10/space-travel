import { useLocation } from "@solidjs/router";
import Navbar from "./components/Navbar";
import styles from "./modules/Layout.module.css";

const backgrounds: Record<string, string> = {
  "/home": "homeBackground",
  "/destination": "destinationBackground",
  "/crew": "crewBackground",
  "/technology": "technologyBackground",
};

export const Layout = (props: any) => {
  const { pathname } = useLocation();
  console.log(pathname);
  console.log(backgrounds[pathname]);
  return (
    <div
      id="layout"
      class={`${styles.imageBackground} ${styles[backgrounds[pathname]]}`}
    >
      <Navbar />
      {props.children}
    </div>
  );
};
