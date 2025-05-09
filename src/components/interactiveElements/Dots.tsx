import { Accessor, For } from "solid-js";

type Props = {
  options: string[];
  active: Accessor<string>;
  onClick: (name: string) => void;
};
const Dots = ({ options, active, onClick }: Props) => {
  return (
    <div class={`flex justify-center gap-4`}>
      <For each={options}>
        {(option) => (
          <button
            class="cursor-pointer border-0 rounded-full aspect-auto p-1.5 bg-[hsl(0_0%_100%_/_25%)]
            hover:bg-[hsl(0_0%_100%_/_50%)] focus:bg-[hsl(0_0%_100%_/_50%)] active:[hsl(0_0%_100%_/_100%)]
            aria-selected:bg-[hsl(0_0%_100%_/_100%)]"
            aria-selected={option === active() ? "true" : "false"}
            onClick={() => onClick(option)}
          >
            <span class="sr-only"> {option}</span>
          </button>
        )}
      </For>
    </div>
  );
};

export default Dots;
