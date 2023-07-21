import { children, type ParentComponent } from "solid-js";

import Styles from "./SidebarFooter.module.scss";

const SidebarFooter: ParentComponent = ({ children: ChildrenElements }) => {
  const resolved = children(() => ChildrenElements);

  return <div class={Styles.sidebarFooterContainer}>{resolved()}</div>;
};

export default SidebarFooter;
