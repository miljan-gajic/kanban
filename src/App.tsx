import type { Component } from "solid-js";

import Styles from "./App.module.scss";

import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarLogo from "@/components/Sidebar/SidebarLogo/SidebarLogo";

const App: Component = () => {
  return (
    <div class={Styles.App}>
      <Sidebar>
        <SidebarLogo />
      </Sidebar>
    </div>
  );
};

export default App;
