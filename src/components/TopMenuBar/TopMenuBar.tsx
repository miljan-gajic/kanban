import { Show, createSignal, type Component } from "solid-js";

import Modal from "@/components/Modal/Modal";
import { TbDotsVertical, TbPlus } from "solid-icons/tb";
import Styles from "./TopMenuBar.module.scss";

const TopMenuBar: Component = () => {
  const [modalOpen, setModalOpen] = createSignal(false);

  const toggleModal = () => setModalOpen(!modalOpen());

  return (
    <div class={Styles.topMenuBarContainer}>
      <p>Platform Launch</p>
      <div class={Styles.topMenuButtonContainer}>
        <button onClick={toggleModal}>
          <TbPlus size={14} color={"var(--clr-text-color-white)"} />
          Add New Task
        </button>
        <TbDotsVertical
          size={24}
          color="var(--clr-text-color)"
          class={Styles.icon}
        />
      </div>
      <Show when={modalOpen()}>
        <Modal isOpen={modalOpen()}>
          <p style={{ color: "white", "font-size": "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit
            quisquam rerum architecto assumenda sapiente, ratione quaerat minus
            voluptatem obcaecati!
          </p>
        </Modal>
      </Show>
    </div>
  );
};

export default TopMenuBar;
