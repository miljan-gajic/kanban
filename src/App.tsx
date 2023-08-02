import type { Component } from "solid-js";

import Styles from "./App.module.scss";

import { useRoutes } from "@solidjs/router";
import { routes } from "./components/Routes/routes";

const App: Component = () => {
  const Routes = useRoutes(routes);
  return (
    <div class={Styles.App}>
      <Routes />
    </div>
  );
};

export default App;
