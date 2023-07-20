import Styles from "./Dropdown.module.scss";

import {
  For,
  Show,
  createEffect,
  createSignal,
  onCleanup,
  type Component,
} from "solid-js";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20" fill="#655fc6">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
    </svg>
  );
};

export type SelectedValue = {
  value: string;
  label: string;
};

type DropdownProps = {
  placeHolder: string;
  options: SelectedValue[];
  isMulti?: boolean;
  isSearchable?: boolean;
  onChange: (value: SelectedValue | SelectedValue[]) => void;
};

const Dropdown: Component<DropdownProps> = ({
  placeHolder,
  options,
  isMulti,
  isSearchable,
  onChange,
}) => {
  const [showMenu, setShowMenu] = createSignal(false);
  const [selectedValue, setSelectedValue] = createSignal<SelectedValue | null>(
    null
  );
  const [selectedValueMulti, setSelectedValueMulti] = createSignal<
    SelectedValue[] | null
  >([]);

  const [displayValue, setDisplayValue] = createSignal(placeHolder);

  const [searchValue, setSearchValue] = createSignal("");

  let searchRef: HTMLInputElement | undefined;
  let inputRef: HTMLDivElement | undefined;

  createEffect(() => {
    setSearchValue("");

    if (showMenu() && searchRef) {
      searchRef.focus();
    }
  });

  createEffect(() => {
    const handler = (e: MouseEvent) => {
      // @ts-ignore
      if (inputRef && !inputRef.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);

    onCleanup(() => {
      window.removeEventListener("click", handler);
    });
  });

  const handleInputClick = (e: MouseEvent) => {
    setShowMenu(!showMenu());
  };

  const getDisplay = () => {
    if (
      !selectedValue()?.value ||
      (isMulti && selectedValueMulti()?.length === 0)
    ) {
      return placeHolder;
    }

    if (isMulti) {
      return (
        <div class={Styles.dropdownTags}>
          <For each={selectedValueMulti()}>
            {(option) => (
              <div class={Styles.dropdownTagItem}>
                {option.label}
                <span
                  onClick={(e) => onTagRemove(e, option)}
                  class={Styles.dropdownTagClose}
                >
                  <CloseIcon />
                </span>
              </div>
            )}
          </For>
        </div>
      );
    }
    return selectedValue()!.label;
  };

  const removeOption = (option: SelectedValue) => {
    return selectedValueMulti()!.filter((o) => o.value !== option.value);
  };

  const onTagRemove = (
    e: MouseEvent & {
      currentTarget: HTMLSpanElement;
      target: Element;
    },
    option: SelectedValue
  ) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedValueMulti(newValue);
    onChange(newValue);
  };

  const onItemClick = (option: SelectedValue) => {
    let newValue;
    if (isMulti) {
      if (
        selectedValueMulti()!.findIndex((o) => o.value === option.value) >= 0
      ) {
        newValue = removeOption(option);
      } else {
        newValue = [...selectedValueMulti()!, option];
      }
    } else {
      newValue = option;
    }

    isMulti
      ? setSelectedValueMulti(newValue as SelectedValue[])
      : setSelectedValue(newValue as SelectedValue);
    onChange(newValue);
  };

  const isSelected = (option: SelectedValue) => {
    if (isMulti) {
      return (
        selectedValueMulti()!.filter((o) => o.value === option.value).length > 0
      );
    }

    if (!selectedValue() || selectedValueMulti()?.length) {
      return false;
    }

    return selectedValue()?.value === option.value;
  };

  const onSearch = (
    e: Event & {
      currentTarget: HTMLInputElement;
      target: HTMLInputElement;
    }
  ) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue()) {
      return options;
    }

    return (options as SelectedValue[]).filter(
      (option) =>
        option.label.toLowerCase().indexOf(searchValue().toLowerCase()) >= 0
    );
  };

  return (
    <>
      <p class={Styles.dropdownLabel}>Status</p>
      <div class={Styles.dropdownContainer}>
        <div
          ref={inputRef}
          onClick={handleInputClick}
          class={Styles.dropdownInput}
        >
          <div class={Styles.dropdownSelectedValue}>{getDisplay()}</div>
          <div class={Styles.dropdownTools}>
            <div class={Styles.dropdownTool}>
              <Icon />
            </div>
          </div>
        </div>
        <Show when={showMenu()}>
          <div class={Styles.dropdownMenu}>
            <Show when={isSearchable}>
              <div class={Styles.searchBox}>
                <input
                  onChange={onSearch}
                  value={searchValue()}
                  ref={searchRef}
                />
              </div>
            </Show>
            <For each={getOptions()}>
              {(option) => (
                <div
                  onClick={() => onItemClick(option)}
                  class={`${Styles.dropdownItem}  ${
                    isSelected(option) && Styles.selected
                  }`}
                >
                  {option.label}
                </div>
              )}
            </For>
          </div>
        </Show>
      </div>
    </>
  );
};

export default Dropdown;
