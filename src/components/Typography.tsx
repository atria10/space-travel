import designStyles from "../modules/DesignSystem.module.css";

const Typography = () => {
  return (
    <section id="typoghraphy" style="padding:1rem 2rem;">
      <h2 class={designStyles.numberedTitle}>
        <span class="text-accent">02</span> typography
      </h2>
      <div class="flex" style="--gap: 5rem; width: 100%; margin:2rem 0">
        <div style="flex-basis:100%; --flow-space:2rem">
          <div>
            <p class="text-accent">Heading 1 - Bellefair Regular - 150px</p>
            <p class="fs-900 ff-serif uppercase">Earth</p>
          </div>
          <div class="text-accent">
            <p>Heading 2 - Bellefair Regular - 100px</p>
            <p class="fs-800 ff-serif uppercase">Venus</p>
          </div>
          <div class="text-accent">
            <p>Heading 3 - Bellefair Regular - 56px</p>
            <p class="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
          </div>
          <div />
          <div>
            <p class="text-accent">Heading 4 - Bellefair Regular - 32px</p>
            <p class="fs-600 ff-serif uppercase">Uranus, Neptune & Pluto</p>
          </div>
          <div>
            <p class="text-accent ">
              Heading 5 - Bellefair Condensed Regular - 28px - 4.75 Character
              Space
            </p>
            <p class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
              So, you want to travel space
            </p>
          </div>
        </div>
        <div style="flex-basis:100%; --flow-space:2rem">
          <div>
            <p class="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
            <p class="fs-500 ff-serif uppercase">384,400 km</p>
          </div>
          <div>
            <p class="text-accent">
              Subheading 2 - Barlow Condensed Regular- 14px - 2.35 Character
              Space
            </p>
            <p class="fs-200 ff-sans-cond uppercase letter-spacing-3">
              Avg. Distance
            </p>
          </div>
          <div>
            <p class="text-accent">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p class="fs-300  uppercase ff-sans-cond letter-spacing-2">
              Europa
            </p>
          </div>

          <div>
            <p class="text-accent">Body Text</p>
            <p class="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dignissimos modi quam necessitatibus obcaecati corporis, voluptas
              quia mollitia, delectus recusandae doloremque repudiandae
              provident corrupti amet temporibus deleniti facilis cum. Maxime!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dignissimos modi quam necessitatibus obcaecati corporis, voluptas
              quia mollitia, delectus recusandae doloremque repudiandae
              provident corrupti amet temporibus deleniti facilis cum. Maxime!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dignissimos modi quam necessitatibus obcaecati corporis, voluptas
              quia mollitia, delectus recusandae doloremque repudiandae
              provident corrupti amet temporibus deleniti facilis cum. Maxime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Typography;
