import { For, type Component } from "solid-js";

import Card from "@/components/Card/Card";
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

type ColumnProps = {
  tickets: string[];
  type: "todo" | "inProgress" | "done";
};

const Column: Component<ColumnProps> = ({ tickets, type }) => {
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
        <For each={tickets}>{(ticket) => <Card title={ticket} />}</For>
      </div>
    </div>
  );
};

export default Column;
