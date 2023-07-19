import { type Component } from "solid-js";
import Styles from "./TextInput.module.scss";

type TextInputProps = {
  fieldName: string;
  onChangeHandler: (
    evt: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => void;
  placeholder?: string;
  label?: string;
};

const TextInput: Component<TextInputProps> = ({
  fieldName,
  onChangeHandler,
  placeholder,
  label,
}) => {
  return (
    <label class={Styles.surroundingLabel}>
      {label ?? ""}
      <input
        class={Styles.textInput}
        type="text"
        onChange={onChangeHandler}
        name={fieldName}
        placeholder={placeholder}
      />
    </label>
  );
};

export default TextInput;
