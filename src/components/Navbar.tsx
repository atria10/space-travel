import logo from "../assets/shared/logo.svg";
import data from "../data.json";
import styles from "../modules/Navbar.module.css";
import Navigation from "./interactiveElements/Navigation";
const Navbar = () => {
  const links = ["home", ...Object.keys(data)];

  return (
    <header class={`${styles.primaryHeader} flex`}>
      <div style='flex:1;'>
        <img src={logo} alt="space tourism logo" class="logo" />
      </div>
      <Navigation links={links} />
    </header>
  );
};

export default Navbar;
