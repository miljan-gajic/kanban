import type { Component } from "solid-js";

import { doneSubtasks } from "@/utils/displayFinishedSubtasks";
import { Subtasks } from "../BoardContent/Column/Column";
import Styles from "./Card.module.scss";

type CardProps = {
  title: string;
  subtasks: Subtasks[];
};

const Card: Component<CardProps> = ({ title, subtasks }) => {
  return (
    <div class={Styles.cardContainer}>
      <div class={Styles.cardTitle}>{title}</div>
      <div class={Styles.cardSubtasks}>
        {doneSubtasks(subtasks)} of {subtasks.length} subtasks
      </div>
    </div>
  );
};

export default Card;
