import { A } from "@solidjs/router";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class={`container  `}>
      <h1>Home PAGE</h1>
      <div class="container flex">
        <A href="/design-system">Go to Design System </A>
      </div>
    </div>
  );
};

export default App;
