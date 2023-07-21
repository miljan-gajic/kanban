import type { ParentComponent } from "solid-js";
import { children } from "solid-js";

import Styles from "./Sidebar.module.scss";

const Sidebar: ParentComponent = (props) => {
  const resolved = children(() => props.children);
  return (
    <section class={Styles.sidebarSectionContainer}>
      <div class={Styles.sidebarSectionContainerElements}>{resolved()}</div>
    </section>
  );
};

export default Sidebar;
