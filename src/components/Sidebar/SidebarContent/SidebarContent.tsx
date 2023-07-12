import { TbLayoutKanban, TbPlus } from "solid-icons/tb";
import type { Component } from "solid-js";
import { For, createSignal } from "solid-js";

import SidebarContentItem from "@/components/Sidebar/SidebarContent/SidebarContentItem/SidebarContentItem";
import Styles from "./SidebarContent.module.scss";

type SidebarContentProps = {
  boards: string[];
};

const SidebarContent: Component<SidebarContentProps> = ({ boards }) => {
  const [activeBoard, setActiveBoard] = createSignal("Platform Launch");

  return (
    <div class={Styles.sidebarContentContainer}>
      <div class={Styles.sidebarContent}>
        <div class={Styles.sidebarBoards}>
          <span>all boards ( {boards.length} )</span>
        </div>

        <For each={boards}>
          {(label, i) => (
            <SidebarContentItem
              label={label}
              activeBoard={activeBoard()}
              setActiveBoard={setActiveBoard}
            />
          )}
        </For>
        <div class={Styles.sidebarContentAddNewBoard}>
          <TbLayoutKanban
            size={24}
            color={"var(--clr-primary-selected)"}
            class={Styles.icon}
          />
          <button type="button">
            <TbPlus size={14} color={"var(--clr-primary-selected)"} />
            Create new board
          </button>
        </div>
      </div>
    </div>
  );
};

export default SidebarContent;
