import { TbLayoutKanban } from "solid-icons/tb";
import { Setter, createEffect, createSignal, type Component } from "solid-js";

import Styles from "./SidebarContentItem.module.scss";

type SidebarContentItemProps = {
  label: string;
  activeBoard: string;
  setActiveBoard: Setter<string>;
};
const SidebarContentItem: Component<SidebarContentItemProps> = ({
  label,
  activeBoard,
}) => {
  const [active, setActive] = createSignal(false);

  createEffect(() => {
    return activeBoard === label ? setActive(true) : setActive(false);
  });

  return (
    <div
      class={`${
        active() ? Styles.activeSidebarItem : Styles.boardLabelContainer
      }`}
    >
      <div class={Styles.iconContainer}>
        <TbLayoutKanban
          size={24}
          color={
            active() ? "var(--clr-text-color-white)" : "var(--clr-text-color)"
          }
          class={Styles.icon}
          title="a11y"
        />
      </div>
      <div class={Styles.sidebarItemLabel}>{label}</div>
    </div>
  );
};

export default SidebarContentItem;
