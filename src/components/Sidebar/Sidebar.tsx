import type { ParentComponent } from "solid-js";
import { children } from "solid-js";

import Styles from "./Sidebar.module.scss";

const Sidebar: ParentComponent = (props) => {
  const c = children(() => props.children);
  return <section class={Styles.sidebarSectionContainer}>{c()}</section>;
};

export default Sidebar;
