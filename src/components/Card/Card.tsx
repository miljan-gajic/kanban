import type { Component } from "solid-js";

import Styles from "./Card.module.scss";

type CardProps = {
  title: string;
};

const Card: Component<CardProps> = ({ title }) => {
  return (
    <div class={Styles.cardContainer}>
      <div class={Styles.cardTitle}>{title}</div>
      <div class={Styles.cardSubtasks}>0 of 3 subtasks</div>
    </div>
  );
};

export default Card;
