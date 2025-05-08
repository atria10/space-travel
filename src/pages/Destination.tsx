import { createSignal } from "solid-js";
import Tabs from "../components/interactiveElements/Tabs";
import data from "../data.json";
import designStyles from "../modules/DesignSystem.module.css";
export const Destination = () => {
  const { destination: destinations } = data;
  const [active, setActive] = createSignal<string>(
    destinations[0].name
  );
  const destination=destinations.find(item=>item.name===active())!
  const handleDestination = (name: string) => {
    const _destination =
      destinations.find((item) => item.name === name) || destinations[0];
      setActive(_destination.name);
  };
  return (
    <div
      class={`grid-container`}
      style={"--gap:4rem; place-items:start; margin-top:2rem"}
    >
      <div>
        <h2 class={designStyles.numberedTitle}>
          <span class="text-accent">01</span> Pick your destination
        </h2>
      </div>
      <Tabs
        options={destinations.map((item) => item.name)}
        onClick={handleDestination}
        active={active}
      />
      <picture id="moon-image">
        <source srcset={destination.images.webp} type="image/webp" />
        <img src={destination.images.png} alt={destination.name} />
      </picture>
    </div>
  );
};
