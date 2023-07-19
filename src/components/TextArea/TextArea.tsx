import { type Component } from "solid-js";
import Styles from "./TextArea.module.scss";

type TextInputProps = {
  fieldName: string;
  onChangeHandler: (
    evt: Event & {
      currentTarget: HTMLTextAreaElement;
      target: HTMLTextAreaElement;
    }
  ) => void;
  placeholder?: string;
  label: string;
};

const TextInput: Component<TextInputProps> = ({
  fieldName,
  onChangeHandler,
  placeholder,
  label,
}) => {
  return (
    <label class={Styles.surroundingLabel}>
      {label}
      <textarea
        class={Styles.textArea}
        onChange={onChangeHandler}
        name={fieldName}
        placeholder={placeholder}
        rows={7}
      />
    </label>
  );
};

export default TextInput;
