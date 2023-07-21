import closeIcon from "@/assets/close.svg";
import { Show, type Component } from "solid-js";
import Styles from "./TextInput.module.scss";

type TextInputProps = {
  fieldName: string;
  value?: string;
  onChangeHandler: (
    evt: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => void;
  placeholder?: string;
  label?: string;
  icon?: boolean;
  customHandler?: () => void;
};

const TextInput: Component<TextInputProps> = ({
  fieldName,
  onChangeHandler,
  customHandler,
  placeholder,
  label,
  icon,
}) => {
  return (
    <label class={Styles.surroundingLabel}>
      {label ?? ""}
      <span
        classList={{
          [Styles.inputFullWidth]: !icon,
          [Styles.iconAndInputContainer]: icon,
        }}
      >
        <input
          class={Styles.textInput}
          classList={{ [Styles.inputWithIcon]: icon }}
          type="text"
          onChange={onChangeHandler}
          name={fieldName}
          placeholder={placeholder}
        />
        <Show when={icon}>
          <img
            src={closeIcon}
            alt="remove subtask button"
            onClick={customHandler}
            class={Styles.endIcon}
          />
        </Show>
      </span>
    </label>
  );
};

export default TextInput;
