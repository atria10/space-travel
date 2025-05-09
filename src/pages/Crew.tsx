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
    <div class={` grid ${smallGridArea} gap-2 items-start`}>
      <div class="[grid-area:title]">
        <NumberedTitle number={"02"} title="Meet your crew" />
      </div>

      <main class="[grid-area:article] text-white text-center">
        <h2 class="text-serif text-md text-[hsl(0_0%_100%_/_40%)] uppercase">
          {crew().role}
        </h2>
        <h2 class="text-serif text-xl tracking-wider uppercase">{crew().name}</h2>
        <p class="text-sm text-accent tracking-wide mt-2">{crew().bio}</p>
      </main>

      <section class="[grid-area:image] border-[hsl(0_0%_100%_/_20%)] border-b-1">
        <picture id={`${crew().name}-image`}>
          <source srcset={crew().images.webp} type="image/webp" />
          <img
            src={crew().images.png}
            alt={crew().name}
            class="max-w-[60%] mx-auto lg:max-w-[90%]"
          />
        </picture>
      </section>
      <section class="[grid-area:dots]">
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
