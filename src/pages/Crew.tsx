import { createMemo, createSignal } from "solid-js";
import Dots from "../components/interactiveElements/Dots";
import NumberedTitle from "../components/NumberedTitle";
import data from "../data.json";

export const Crew = () => {
  const { crew: crews } = data;
  const [active, setActive] = createSignal<string>(crews[0].name);
  // ✅ Reactive destination based on active signal
  const crew = createMemo(
    () => crews.find((item) => item.name === active()) || crews[0]
  );

  const handleCrew = (name: string) => {
    const _crew = crews.find((item) => item.name === name) || crews[0];
    setActive(_crew.name);
  };

  return (
    <div
      class={` grid ${smallGridArea} ${tabletGridArea} ${largeGridArea} gap-2`}
    >
      <div
        class="[grid-area:title] text-center md:text-left text-lg
       md:text-2xl lg:text-3xl flex justify-center md:justify-start md:px-4 lg:px-[15%]"
      >
        <NumberedTitle number={"02"} title="Meet your crew" />
      </div>

      <main
        class="[grid-area:article] self-center
         lg:self-start text-white text-center lg:text-left flex flex-col lg:justify-start"
      >
        <h2 class="text-serif text-md md:text-2xl lg:text-3xl   text-[hsl(0_0%_100%_/_40%)] uppercase">
          {crew().role}
        </h2>
        <h2 class="text-serif text-xl md:text-4xl lg:text-5xl tracking-wider lg:tracking-normal uppercase">
          {crew().name}
        </h2>
        <p class="text-sm md:text-lg text-accent tracking-wide mt-2 md:my-6 md:w-2/3 lg:w-auto md:m-auto">
          {crew().bio}
        </p>
      </main>

      <section class="[grid-area:image] border-[hsl(0_0%_100%_/_20%)] border-b-1">
        <picture id={`${crew().name}-image`}>
          <source srcset={crew().images.webp} type="image/webp" />
          <img
            src={crew().images.png}
            alt={crew().name}
            class="max-w-[60%] mx-auto md:max-w-[50%] lg:max-w-[70%] lg:min-w-[60%]"
          />
        </picture>
      </section>

      <section class="[grid-area:dots] lg:justify-self-start lg:self-start">
        <Dots
          options={crews.map((item) => item.name)}
          onClick={handleCrew}
          active={active}
        />
      </section>
    </div>
  );
};

const smallGridArea = `[grid-template-areas:'title''image''dots''article']`;
const tabletGridArea = `md:[grid-template-areas:'title''article''dots''image']`;
const largeGridArea = `lg:[grid-template-areas:'title_title_image_image''article_._image_image''dots_dots_image_image']
   lg:grid-cols-[minmax(0,_40%)_1fr_1fr_1fr] lg:px-[10vh]
`;
