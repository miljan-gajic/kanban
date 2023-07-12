import type { Component } from "solid-js";

import Styles from "./BoardContent.module.scss";

const BoardContent: Component = () => {
  return (
    <div class={Styles.mainGrid}>
      <div class={`${Styles.mainGridElement} ${Styles.mainGridElementTodo}`}>
        1
      </div>
      <div
        class={`${Styles.mainGridElement} ${Styles.mainGridElementInProgress}`}
      >
        2
      </div>
      <div class={`${Styles.mainGridElement} ${Styles.mainGridElementDone}`}>
        3
      </div>
    </div>
  );
};

export default BoardContent;
