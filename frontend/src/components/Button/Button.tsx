import { type Component } from "solid-js";
import Styles from "./Button.module.scss";

type ButtonProps = {
  label: string;
  type: "button" | "submit";
  primary?: boolean;
  secondary?: boolean;
  variant?: "outlined" | "solid";
  rounded?: boolean;
  onClick?: () => void;
};

const Button: Component<ButtonProps> = ({
  label,
  variant = "solid",
  rounded = true,
  type,
  onClick,
  primary = true,
  secondary,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      class={`${Styles[variant]} ${Styles.button}`}
      classList={{
        [Styles.rounded]: rounded,
        [Styles.primary]: primary,
        [Styles.secondary]: secondary,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
