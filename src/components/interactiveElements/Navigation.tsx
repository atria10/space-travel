import { A } from "@solidjs/router";
import navigationStyles from "../../modules/Navigation.module.css";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul
          class={`${navigationStyles.primaryNavigation} ${navigationStyles.underlineIndicators} flex`}
        >
          <li class={navigationStyles.active}>
            <A class="uppercase text-white letter-spacing-2" href="#">
              <span>01</span>
              Active
            </A>
          </li>
          <li>
            <A class="uppercase text-white letter-spacing-2" href="#">
              <span>02</span>
              Hovered
            </A>
          </li>
          <li>
            <A class="uppercase text-white letter-spacing-2" href="#">
              <span>03</span>
              Idle
            </A>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
