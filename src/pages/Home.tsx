import { A } from "@solidjs/router";
import type { Component } from "solid-js";
import buttonStyles from "../modules/Button.module.css";

const App: Component = () => {
  return (
    <div class="container">
      <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
        So you want to travel to
        <span class="fs-900 ff-serif text-white">Space</span>
      </h1>
      <p>
        Let's face it; if you want to go to space, you might as well genuinely
        go to outer space and explore the unknown. Well sit back, and relax
        because we'll give you a truly out of this world experience!
      </p>
      <A
        href="#"
        class={`${buttonStyles.largeButton} uppercase ff-serif bg-white text-dark fs-600`}
      >
        Explore
      </A>
    </div>
  );
};

export default App;
