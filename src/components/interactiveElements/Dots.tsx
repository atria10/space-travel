import navigationStyles from "../../modules/Navigation.module.css";

const Dots = () => {
  return (
    <div class={`${navigationStyles.dotIndicators} flex`} style="--gap:1rem; margin: 2rem 0">
      <button aria-selected="true">
        {" "}
        <span class="sr-only">Slide title</span>
      </button>
      <button aria-selected="false">
        <span class="sr-only">Slide title</span>
      </button>
      <button aria-selected="false">
        <span class="sr-only">Slide title</span>
      </button>
    </div>
  );
};

export default Dots;
