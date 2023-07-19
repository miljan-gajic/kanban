import { type ParentComponent } from "solid-js";
import { Portal } from "solid-js/web";

import Styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  closeHandler?: () => void;
};

const Modal: ParentComponent<ModalProps> = ({ children, isOpen }) => {
  return (
    <Portal>
      <section role="dialog" class={Styles.modal}>
        {children}
      </section>
    </Portal>
  );
};

export default Modal;
