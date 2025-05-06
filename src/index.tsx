/* @refresh reload */
import { render } from "solid-js/web";

import { Route, Router } from "@solidjs/router";
import Home from "./pages/Home";
import DesignSystem from "./pages/DesignSystem";
import "./index.css";
import NotFound from "./pages/NotFound";
import { Layout } from "./Layout";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <Router root={Layout}>
      <Route path="/home" component={Home} />
      <Route path="/design-system" component={DesignSystem} />
      <Route path="*paramName" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")!
);
