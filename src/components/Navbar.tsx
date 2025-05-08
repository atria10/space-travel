import { createSignal } from "solid-js";
import logo from "/assets/shared/logo.svg";
import data from "../data.json";
import styles from "../modules/Navbar.module.css";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./interactiveElements/Navigation";

const Navbar = () => {
  const links = ["home", ...Object.keys(data)];
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <header class={`${styles.primaryHeader} flex justify-between items-center`}>
      <div >
        <img src={logo} alt="space tourism logo" class="logo" />
      </div>
      <div class={`${styles.navItems}`}>
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <Navigation links={links} isOpen={isOpen} />
      </div>
    </header>
  );
};

export default Navbar;
