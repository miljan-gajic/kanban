import type { Component } from "solid-js";

import Styles from "./SidebarLogo.module.scss";

const SidebarLogo: Component = () => {
  return (
    <div class={Styles.logoContainer}>
      <h2>kanban</h2>
    </div>
  );
};

export default SidebarLogo;
