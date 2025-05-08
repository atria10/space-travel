import { Menu, X } from "lucide-solid";
import { Accessor, Setter } from "solid-js";
import buttonStyles from "../modules/Button.module.css";
import styles from "../modules/Navbar.module.css";
type Props = {
  setIsOpen: Setter<boolean>;
  isOpen:  Accessor<boolean>;
};
const BurgerMenu = ({ isOpen, setIsOpen }: Props) => {
  const toggle = () => setIsOpen(prev=>!prev);

  return (
    <div class={styles.burger}>
      <button
        class={buttonStyles.toggleButton}
        aria-controls="primaryNavigation"
        aria-expanded={isOpen()?"true":"false"}
        data-visible={isOpen()?"true":"false"}
        onClick={toggle}
      >
        {isOpen()?<X size={24}/>:<Menu size={24} />}

        <span class="sr-only">Menu</span>
      </button>
    </div>
  );
};

export default BurgerMenu;
