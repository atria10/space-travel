import navigationStyles from "../../modules/Navigation.module.css";

const Tabs = () => {
  return (
    <div
      class={`${navigationStyles.underlineIndicators} ${navigationStyles.tabList} flex`}
      style="margin: 2rem 0"
    >
      <button
        aria-selected="true"
        class="uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark "
      >
        Moon
      </button>
      <button
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark "
      >
        Mars
      </button>
      <button
        aria-selected="false"
        class="uppercase ff-sans-cond text-accent letter-spacing-2 bg-dark "
      >
        Europa
      </button>
    </div>
  );
};

export default Tabs;
