import { Show, createSignal, type Component } from "solid-js";

import Modal from "@/components/Modal/Modal";
import { TbDotsVertical, TbPlus } from "solid-icons/tb";
import AddNewTaskForm from "../Forms/AddNewTaskForm/AddNewTaskForm";
import Styles from "./TopMenuBar.module.scss";

const TopMenuBar: Component = () => {
  const [modalOpen, setModalOpen] = createSignal(false);

  const toggleModal = () => setModalOpen(!modalOpen());

  return (
    <div class={Styles.topMenuBarContainer}>
      <p>Platform Launch</p>
      <div class={Styles.topMenuButtonContainer}>
        <Show
          when={modalOpen()}
          fallback={
            <button onClick={toggleModal}>
              <TbPlus size={14} color={"var(--clr-text-color-white)"} />
              Add New Task
            </button>
          }
        >
          <Modal isOpen={modalOpen()} closeHandler={toggleModal}>
            <AddNewTaskForm />
          </Modal>
        </Show>
        <TbDotsVertical
          size={24}
          color="var(--clr-text-color)"
          class={Styles.icon}
        />
      </div>
    </div>
  );
};

export default TopMenuBar;
