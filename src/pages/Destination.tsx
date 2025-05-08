import { createMemo, createSignal } from "solid-js";
import Tabs from "../components/interactiveElements/Tabs";
import data from "../data.json";
import designStyles from "../modules/DesignSystem.module.css";
import styles from "../modules/Destination.module.css";
export const Destination = () => {
  const { destination: destinations } = data;
  const [active, setActive] = createSignal<string>(destinations[0].name);
  // ✅ Reactive destination based on active signal
  const destination = createMemo(
    () => destinations.find((item) => item.name === active()) || destinations[0]
  );

  const handleDestination = (name: string) => {
    const _destination =
      destinations.find((item) => item.name === name) || destinations[0];
    setActive(_destination.name);
  };

  return (
    <div class={`grid-container ${styles.destination} flow`}>
      <div class={styles.title}>
        <h2 class={`${designStyles.numberedTitle}`}>
          <span class="text-accent">01</span> Pick your destination
        </h2>
      </div>

      <picture id={`${destination().name}-image`}>
        <source srcset={destination().images.webp} type="image/webp" />
        <img src={destination().images.png} alt={destination().name} />
      </picture>

      <section>
        <Tabs
          options={destinations.map((item) => item.name)}
          onClick={handleDestination}
          active={active}
        />
      </section>

      <article class={styles.destinationInfo}>
        <h2 class="fs-800 uppercase ff-serif">{destination().name}</h2>
        <p>{destination().description}</p>
        <div class={`flex ${styles.meta}`}>
          <div>
            <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
            <p class="ff-serif fs-500 uppercase">{destination().distance}</p>
          </div>
          <div>
            <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
            <p class="ff-serif fs-500 uppercase">{destination().travel}</p>
          </div>
        </div>
      </article>
    </div>
  );
};
