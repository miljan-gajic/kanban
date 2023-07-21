import { For, type Component } from "solid-js";

import Styles from "./BoardContent.module.scss";
import Column from "./Column/Column";

import taskData from "@/assets/data/boardsAndTasks.json";

const BoardContent: Component = () => {
  return (
    <div class={Styles.mainGrid}>
      <For each={taskData[0].columns}>
        {(task) => (
          <div
            class={Styles.mainGridElement}
            classList={{
              [Styles.mainGridElementTodo]: task.type === "todo",
              [Styles.mainGridElementInProgress]: task.type === "inProgress",
              [Styles.mainGridElementDone]: task.type === "done",
            }}
          >
            <Column tickets={task.tasks} type={task.type} />
          </div>
        )}
      </For>
    </div>
  );
};

export default BoardContent;
