import { A } from "@solidjs/router";
import buttonStyles from "../modules/Button.module.css";
import designStyles from "../modules/DesignSystem.module.css";
import Dots from "./interactiveElements/Dots";
import Navigation from "./interactiveElements/Navigation";
import Tabs from "./interactiveElements/Tabs";
import NumberIndicators from "./interactiveElements/NumberIndicators";

const InteractiveElements = () => {
  return (
    <section id="interactive-elements" style=" padding:1rem 2rem;">
      <h2 class={designStyles.numberedTitle}>
        <span class="text-accent">03</span> interactive elements
      </h2>

      {/*  navigation */}
      <Navigation />

      <div class="flex" style="--gap: 5rem; width: 100%; margin:2rem 0">
        <div style="margin-top:5rem;">
          {/* explore button */}
          <A
            href="#"
            class={`${buttonStyles.largeButton} uppercase ff-serif bg-white text-dark fs-600`}
          >
            Explore
          </A>
        </div>
        <div style="flow margin-bottom:50vh; --flow-space:4rem">
          {/* tabs */}
          <Tabs />
          {/* dots */}
          <Dots />
          {/* numbers */}
          <NumberIndicators />
        </div>
      </div>
    </section>
  );
};

export default InteractiveElements;
