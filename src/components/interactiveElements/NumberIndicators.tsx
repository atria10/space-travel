import styles from "../../modules/DesignSystem.module.css";

const NumberIndicators = () => {
  return (
    <div
      class={`${styles.numberIndicators} grid`}
      style="--gap:1rem; margin: 2rem 0"
    >
      <button aria-selected="true">
        <span>1</span>
      </button>
      <button aria-selected="false">
        <span>2</span>
      </button>
      <button aria-selected="false">
        <span>3</span>
      </button>
    </div>
  );
};

export default NumberIndicators;
