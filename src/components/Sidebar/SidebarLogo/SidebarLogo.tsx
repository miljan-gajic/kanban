import { type Component } from "solid-js";

import Styles from "./SidebarLogo.module.scss";

const SidebarLogo: Component = () => {
  return (
    <div class={Styles.logoContainer}>
      <div class={Styles.logoBarsContainer}>
        <div class={Styles.logoBars1}></div>
        <div class={Styles.logoBars2}></div>
        <div class={Styles.logoBars3}></div>
      </div>
      <h2 class={Styles.logoTypography}>taskme</h2>
    </div>
  );
};

export default SidebarLogo;
