import { Accessor, For } from "solid-js";
import styles from "../../modules/DesignSystem.module.css";
import navigationStyles from "../../modules/Navigation.module.css";
type Props = {
  options: string[];
  active: Accessor<string>;
  onClick: (name: string) => void;
};
const Tabs = ({ options, active, onClick }: Props) => {
  return (
    <div
      class={`${navigationStyles.underlineIndicators} ${styles.tabList} flex`}
      style="margin: 2rem 0"
    >
      <For each={options}>
        {(option) => (
          <div
            aria-selected={option === active() ? "true" : "false"}
            onClick={() => onClick(option)}
          >
            {option}
          </div>
        )}
      </For>
    </div>
  );
};

export default Tabs;
