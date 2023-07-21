import { Subtasks } from "@/components/BoardContent/Column/Column";

export const doneSubtasks = (subtasks: Subtasks[]) => {
  return subtasks
    .map((sub) => sub.status === "done")
    .flat()
    .filter(Boolean).length;
};
