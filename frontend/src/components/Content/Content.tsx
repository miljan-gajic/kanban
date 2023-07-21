import type { ParentComponent } from "solid-js";
import { children } from "solid-js";

import Styles from "./Content.module.scss";

const Content: ParentComponent = ({ children: ChildrenElements }) => {
  const resolved = children(() => ChildrenElements);
  return <section class={Styles.mainContent}>{resolved()}</section>;
};

export default Content;
