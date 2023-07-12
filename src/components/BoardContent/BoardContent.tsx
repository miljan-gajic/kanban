import type { Component } from "solid-js";

import Styles from "./BoardContent.module.scss";
import Column, {
  tempDoneTickets,
  tempInProgressTickets,
  tempToDoTickets,
} from "./Column/Column";

const BoardContent: Component = () => {
  return (
    <div class={Styles.mainGrid}>
      <div class={`${Styles.mainGridElement} ${Styles.mainGridElementTodo}`}>
        <Column tickets={tempToDoTickets} type="todo" />
      </div>
      <div
        class={`${Styles.mainGridElement} ${Styles.mainGridElementInProgress}`}
      >
        <Column tickets={tempInProgressTickets} type="inProgress" />
      </div>
      <div class={`${Styles.mainGridElement} ${Styles.mainGridElementDone}`}>
        <Column tickets={tempDoneTickets} type="done" />
      </div>
    </div>
  );
};

export default BoardContent;
