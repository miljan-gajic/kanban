import type { ParentComponent } from "solid-js";
import { children } from "solid-js";

import Styles from "./Layout.module.scss";

const Layout: ParentComponent = (props) => {
  const c = children(() => props.children);
  return <div class={Styles.main}>{c()}</div>;
};

export default Layout;
