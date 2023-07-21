import { TbEye, TbEyeClosed } from "solid-icons/tb";
import { Show, createSignal, type Component } from "solid-js";

import Styles from "./FooterShowHideAction.module.scss";

const FooterShowHideAction: Component = () => {
  const [hiddenSidebar, setHiddenSidebar] = createSignal(false);

  const toggleSidebar = () => setHiddenSidebar(!hiddenSidebar());

  return (
    <div class={Styles.footerShowHideActionContainer} onClick={toggleSidebar}>
      <Show
        when={hiddenSidebar()}
        fallback={
          <>
            <TbEyeClosed size={24} color="var(--clr-text-color)" />{" "}
            <span class={Styles.footerShowHideActionText}>Hide Sidebar</span>
          </>
        }
      >
        <TbEye size={24} color="var(--clr-text-color)" />
      </Show>
    </div>
  );
};

export default FooterShowHideAction;
