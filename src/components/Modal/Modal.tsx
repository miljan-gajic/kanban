import type { ParentComponent } from "solid-js";

import Styles from "./Modal.module.scss";

const Modal: ParentComponent = ({ children }) => {
  return (
    <section role="dialog" class={Styles.modal}>
      {children}
    </section>
  );
};

export default Modal;
