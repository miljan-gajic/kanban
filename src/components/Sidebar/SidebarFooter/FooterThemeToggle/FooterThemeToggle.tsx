import { createSignal, type Component } from "solid-js";

import ToggleSwitch from "@/components/ToggleSwitch/ToggleSwitch";
import { TbMoonFilled, TbSunFilled } from "solid-icons/tb";
import Styles from "./FooterThemeToggle.module.scss";

const FooterThemeToggle: Component = () => {
  const [toggleDarkTheme, setToggleDarkTheme] = createSignal(true);

  return (
    <div class={Styles.sidebarFooterThemeToggleContainer}>
      <TbSunFilled size={24} color="var(--clr-text-color)" />
      <ToggleSwitch
        isToggled={toggleDarkTheme()}
        onToggle={setToggleDarkTheme}
      />
      <TbMoonFilled size={24} color="var(--clr-text-color)" />
    </div>
  );
};

export default FooterThemeToggle;
