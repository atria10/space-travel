const Colors = () => {
  return (
    <section id="colors" class="bg-dark text-white" style="padding:1rem 2rem;">
      <h2 class="uppercase letter-spacing-1">
        <span class="text-accent">01</span > colors
      </h2>
      <div class="flex" style="--gap: 5rem; width: 100%; margin:2rem 0">
        <div style="flex: 1;">
          <div
            class="bg-dark text-white"
            style={"padding: 3rem 1rem 1rem; border: 1px solid white"}
          >
            #0B0D117
          </div>
          <p>
            <span class="text-accent">RGB</span> 11,13,23
          </p>
          <p>
            <span class="text-accent">HSL</span> 230, 35%, 7%
          </p>
        </div>
        <div style="flex: 1;">
          <div
            class="bg-accent text-dark"
            style={"padding: 3rem 1rem 1rem; border: 1px solid white"}
          >
            #0B0D117
          </div>
          <p>
            <span class="text-accent">RGB</span> 11,13,23
          </p>
          <p>
            <span class="text-accent">HSL</span> 230, 35%, 7%
          </p>
        </div>
        <div style="flex: 1;">
          <div
            class="bg-white text-dark"
            style={"padding: 3rem 1rem 1rem; border: 1px solid white"}
          >
            #0B0D117
          </div>
          <p>
            <span class="text-accent">RGB</span> 11,13,23
          </p>
          <p>
            <span class="text-accent">HSL</span> 230, 35%, 7%
          </p>
        </div>
      </div>
    </section>
  );
};

export default Colors;
