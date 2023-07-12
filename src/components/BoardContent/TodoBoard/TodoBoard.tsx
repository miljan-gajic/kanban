import { For, type Component } from "solid-js";

import Card from "@/components/Card/Card";
import Styles from "./TodoBoard.module.scss";

const temTickets = [
  "Build UI For Onboarding Flow",
  "Build UI for Search",
  "Build Settings UI",
  "QA and test all major user journeys",
];

const TodoBoard: Component = () => {
  return (
    <div class={Styles.todoBoardContainer}>
      <div class={Styles.todoBoardLabel}>Todo ( 4 )</div>
      <div class={Styles.todoBoardTickets}>
        <For each={temTickets}>{(ticket) => <Card title={ticket} />}</For>
      </div>
    </div>
  );
};

export default TodoBoard;
