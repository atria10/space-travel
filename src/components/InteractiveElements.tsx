import { A } from "@solidjs/router";
import designStyles from "../pages/designSystem/DesignSystem.module.css";
import buttonStyles from "../modules/Button.module.css";

const InteractiveElements = () => {
  return (
    <section id="interactive-elements" style=" padding:1rem 2rem;">
      <h2 class={designStyles.numberedTitle}>
        <span class="text-accent">03</span> interactive elements
      </h2>

      {/*  navigation */}
      <div></div>

      <div class="flex">
        <div style='margin-top:5rem;'>
          {/* explore button */}
          <A
            href="#"
            class={`${buttonStyles.largeButton} uppercase ff-serif bg-white text-dark fs-600`}
          >
            Explore
          </A>
        </div>
        <div style="margin-bottom:50vh;">
          {/* tabs */}

          {/* dots */}

          {/* numbers */}
        </div>
      </div>
    </section>
  );
};

export default InteractiveElements;
