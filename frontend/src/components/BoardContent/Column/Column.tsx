import { For, Show, createSignal, type Component } from "solid-js";

import Card from "@/components/Card/Card";
import Modal from "@/components/Modal/Modal";
import TaskOverview from "../TaskOverview/TaskOverview";
import Styles from "./Column.module.scss";

export const tempToDoTickets = [
  "Build UI For Onboarding Flow",
  "Build UI for Search",
  "Build Settings UI",
  "QA and test all major user journeys",
];

export const tempDoneTickets = [
  "Conduct 5 Wireframe tests",
  "Create Wireframe prototypes",
  "Review results of usability tests and iterate",
  "Create paper prototypes and conduct 10 usability tests with potential customers",
  "Market discovery",
  "Competitor analysis",
  "Research the market",
];

export const tempInProgressTickets = [
  "Design Settings and Search pages",
  "Add Account management endpoints",
  "Design onboarding flow",
  "Add Search endpoints",
  "Add Authentication endpoints",
  "Research pricing points of various competitors and trial different business models",
];

export type Subtasks = {
  title: string;
  status: string;
};
export type Tickets = {
  title: string;
  description: string;
  subtasks: Subtasks[];
  status: string;
};

type ColumnProps = {
  tickets: Tickets[];
  type: string;
};

const Column: Component<ColumnProps> = ({ tickets, type }) => {
  const [modalOpen, setModalOpen] = createSignal<Record<string, boolean>>({});

  const openingModal = (modalIdx: number) => {
    setModalOpen({
      ...modalOpen(),
      [modalIdx]: true,
    });
  };
  const modalClose = (modalIdx: number) => {
    setModalOpen({
      ...modalOpen(),
      [modalIdx]: false,
    });
  };

  const columnTitle = type
    .split(/(?=[A-Z])/)
    .join(" ")
    .toUpperCase();

  return (
    <div class={Styles.columnContainer}>
      <div class={Styles[type]}>
        {columnTitle} ( {tickets.length} )
      </div>
      <div class={Styles.columnTickets}>
        <For each={tickets}>
          {({ description, status, subtasks, title }, i) => (
            <>
              <div onClick={() => openingModal(i())} class={Styles.cardWrapper}>
                <Card title={title} subtasks={subtasks} />
              </div>
              <Show when={modalOpen()[i()]}>
                <Modal
                  isOpen={modalOpen()[i()]}
                  closeHandler={() => modalClose(i())}
                >
                  <TaskOverview
                    ticketTitle={title}
                    ticketDescription={description}
                    status={status}
                    subtasks={subtasks}
                  />
                </Modal>
              </Show>
            </>
          )}
        </For>
      </div>
    </div>
  );
};

export default Column;
