import Checkbox from "@/components/Checkbox/Checkbox";
import Dropdown from "@/components/Dropdown/Dropdown";
import { doneSubtasks } from "@/utils/displayFinishedSubtasks";
import { BiRegularDotsVerticalRounded } from "solid-icons/bi";
import { Component, For, Show } from "solid-js";
import { Subtasks } from "../Column/Column";

import Styles from "./TaskOverview.module.scss";

type TaskOverviewProps = {
  ticketTitle: string;
  ticketDescription: string;
  subtasks: Subtasks[];
  status: string;
};

export type TicketStatus = "IN_PROGRESS" | "DONE" | "TODO";

const TaskOverview: Component<TaskOverviewProps> = ({
  ticketTitle,
  status,
  subtasks,
  ticketDescription,
}) => {
  const lookUpStatus = {
    IN_PROGRESS: "In Progress",
    DONE: "Done",
    TODO: "ToDo",
  };
  return (
    <div class={Styles.taskOverviewContainer}>
      <div class={Styles.taskOverviewTitleAndIconContainer}>
        <p class={`${Styles.taskOverviewItem} ${Styles.ticketTitle}`}>
          {ticketTitle}
        </p>
        <BiRegularDotsVerticalRounded fill="#7a8394" font-size="1.75rem" />
      </div>
      <p class={`${Styles.taskOverviewItem} ${Styles.ticketDescription}`}>
        {ticketDescription}
      </p>
      <div class={Styles.subtaskContainer}>
        <Show when={subtasks.length > 0}>
          <div class={Styles.subtaskLabel}>
            Subtasks: ({doneSubtasks(subtasks)} of {subtasks.length})
          </div>
        </Show>
        <For each={subtasks}>
          {(sub) => (
            <div
              class={`${Styles.taskOverviewItem} ${Styles.subtaskItemContainer}`}
            >
              <Checkbox label={sub.title} checked={sub.status === "done"} />
            </div>
          )}
        </For>
      </div>
      <div class={Styles.statusLabel}>Status:</div>
      <div class={Styles.taskOverviewDropdownContainer}>
        <Dropdown
          placeHolder={lookUpStatus[status as TicketStatus]}
          options={[
            { label: "Todo", value: "TODO" },
            { label: "In Progress", value: "IN_PROGRESS" },
            { label: "Done", value: "DONE" },
          ]}
          onChange={(value) => console.log({ dropdownValue: value })}
        />
      </div>
    </div>
  );
};

export default TaskOverview;
