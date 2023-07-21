import { createSignal, type Component } from "solid-js";

import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { TbMoonFilled, TbSunFilled } from "solid-icons/tb";
import Styles from "./FooterThemeToggle.module.scss";

const FooterThemeToggle: Component = () => {
  const [toggleDarkTheme, setToggleDarkTheme] = createSignal(true);

  const toggleTheme = () => setToggleDarkTheme(!toggleDarkTheme());

  return (
    <div class={Styles.sidebarFooterThemeToggleContainer}>
      <TbSunFilled
        size={24}
        color={
          toggleDarkTheme()
            ? "var(--clr-text-color)"
            : "var(--clr-text-color-white)"
        }
      />
      <ToggleSwitch isToggled={toggleDarkTheme()} onToggle={toggleTheme} />
      <TbMoonFilled
        size={24}
        color={
          toggleDarkTheme()
            ? "var(--clr-text-color-white)"
            : "var(--clr-text-color)"
        }
      />
    </div>
  );
};

export default FooterThemeToggle;
