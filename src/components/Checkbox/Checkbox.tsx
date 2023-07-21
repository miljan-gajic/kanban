import { type Component } from "solid-js";

import Styles from "./Checkbox.module.scss";

type CheckboxProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
};

const Checkbox: Component<CheckboxProps> = ({ label, checked, disabled }) => {
  return (
    <>
      <label
        class={Styles.formControl}
        classList={{
          [Styles.formControlDisabled]: disabled,
          [Styles.labelStrikethrough]: checked,
        }}
      >
        <input
          type="checkbox"
          name="checkbox"
          checked={checked}
          disabled={disabled}
        />
        {label}
      </label>
    </>
  );
};

export default Checkbox;
