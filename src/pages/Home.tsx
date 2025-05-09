import type { Component } from "solid-js";
import buttonStyles from "../modules/Button.module.css";
import homeStyles from "../modules/Home.module.css";

const Home: Component = () => {
  return (
    <div class={`grid-container ${homeStyles.home} flow`}
    style={"--gap:4rem; margin-top:2rem; "}
>
      <div>
        <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
          So you want to travel to
          <span class="fs-900 ff-serif text-white block">Space</span>
        </h1>
        <p>
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and explore the unknown. Well sit back, and relax
          because we'll give you a truly out of this world experience!
        </p>
      </div>

      <div>
        <p
          class={`${buttonStyles.largeButton} uppercase ff-serif bg-white text-dark `}
          style='cursor:default'
        >
          Explore
        </p>
      </div>
    </div>
  );
};

export default Home;
