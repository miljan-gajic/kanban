import type { Component } from "solid-js";

import { TbDotsVertical, TbPlus } from "solid-icons/tb";
import Styles from "./TopMenuBar.module.scss";

const TopMenuBar: Component = () => {
  return (
    <div class={Styles.topMenuBarContainer}>
      <p>Platform Launch</p>
      <div class={Styles.topMenuButtonContainer}>
        <button>
          <TbPlus size={14} color={"var(--clr-text-color-white)"} />
          Add New Task
        </button>
        <TbDotsVertical
          size={24}
          color="var(--clr-text-color)"
          class={Styles.icon}
        />
      </div>
    </div>
  );
};

export default TopMenuBar;
