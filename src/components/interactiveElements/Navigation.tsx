import { A } from "@solidjs/router";
import { Accessor, For } from "solid-js";
import navigationStyles from "../../modules/Navigation.module.css";
type Props = {
  links: string[];
  isPreview?: boolean;
  isOpen?: Accessor<boolean>;
};

const Navigation = ({
  links,
  isPreview = false,
  isOpen = () => false,
}: Props) => {
  return (
    <div>
      <nav>
        <ul
          id="primaryNavigation"
          class={`${navigationStyles.primaryNavigation} ${
            isOpen() ? navigationStyles.isOpen : navigationStyles.isClosed
          } ${navigationStyles.underlineIndicators} flex`}
        >
          <For each={links}>
            {(link, i) => (
              <A
                activeClass={navigationStyles.active}
                class="ff-sans-cond uppercase text-white letter-spacing-2"
                href={isPreview ? "#" : `/${link}`}
              >
                <span>0{i() + 1}</span>
                {link}
              </A>
            )}
          </For>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
