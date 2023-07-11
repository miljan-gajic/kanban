import type { Component } from "solid-js";

import Styles from "./App.module.scss";

import Sidebar from "@/components/Sidebar/Sidebar";

const App: Component = () => {
  return (
    <div class={Styles.App}>
      <Sidebar />
    </div>
  );
};

export default App;
