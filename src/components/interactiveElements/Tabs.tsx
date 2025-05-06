import navigationStyles from "../../modules/Navigation.module.css";

const Tabs = () => {
  return (
    <div
      class={`${navigationStyles.underlineIndicators} ${navigationStyles.tabList} flex`}
      style="margin: 2rem 0"
    >
      <div
        aria-selected="true"
      >Moon
      </div>
      <div
        aria-selected="false"
      >
       Mars
      </div>
      <div
        aria-selected="false"
      >
        Europa
      </div>
    </div>
  );
};

export default Tabs;
