import closeSvg from "@/assets/close.svg";
import { type ParentComponent } from "solid-js";
import { Portal } from "solid-js/web";

import { clickOutside } from "@/utils/clickOutsideOfElement";
import Styles from "./Modal.module.scss";

type ModalProps = {
  isOpen: boolean;
  closeHandler: () => void;
};

const Modal: ParentComponent<ModalProps> = ({
  children,
  isOpen,
  closeHandler,
}) => {
  return (
    <Portal>
      <section role="dialog" class={Styles.modal}>
        <div
          class={Styles.modalContent}
          ref={(element) => [clickOutside(element, () => closeHandler)]}
        >
          <div class={Styles.closeButton} onClick={closeHandler}>
            <img src={closeSvg} alt="close modal button" />
          </div>
          {children}
        </div>
      </section>
    </Portal>
  );
};

export default Modal;
