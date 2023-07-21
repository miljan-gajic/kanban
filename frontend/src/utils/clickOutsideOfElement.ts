import { onCleanup } from "solid-js";

// @ts-ignore
export const clickOutside = (el, accessor) => {
  const onClick = (e: MouseEvent) => !el.contains(e.target) && accessor()?.();
  const onKeyDown = (e: KeyboardEvent) =>
    (e.code === "Escape" || e.key === "Escape") && accessor()?.();

  document.body.addEventListener("click", onClick);
  document.body.addEventListener("keydown", onKeyDown);

  onCleanup(() => {
    document.body.removeEventListener("click", onClick);
    document.body.removeEventListener("keydown", onKeyDown);
  });
};
