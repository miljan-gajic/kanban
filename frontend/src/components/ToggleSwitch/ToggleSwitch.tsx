import type { Component } from "solid-js";

import Styles from "./ToggleSwitch.module.scss";

type ToggleSwitchProps = {
  isToggled: boolean;
  onToggle: () => boolean;
};
const ToggleSwitch: Component<ToggleSwitchProps> = ({
  isToggled,
  onToggle,
}) => {
  return (
    <label class={Styles.toggleSwitch}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span class={Styles.switch} />
    </label>
  );
};

export default ToggleSwitch;
