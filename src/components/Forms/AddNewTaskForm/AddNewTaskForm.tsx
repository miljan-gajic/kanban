import Button from "@/components/Button/Button";
import TextArea from "@/components/TextArea/TextArea";
import TextInput from "@/components/TextInput/TextInput";
import { For, Show, createSignal } from "solid-js";
import Styles from "./AddNewTask.module.scss";

type InputEvent = Event & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};

type TextAreaEvent = Event & {
  currentTarget: HTMLTextAreaElement;
  target: HTMLTextAreaElement;
};

const AddNewTaskForm = () => {
  const [subtasks, setSubtasks] = createSignal<string[]>([]);
  const [subtasksIncrement, setSubtasksIncrement] = createSignal(1);
  const [addNewTaskForm, setAddNewTaskForm] = createSignal<{
    title: string;
    description: string;
    subtasks: string[];
  }>({
    title: "",
    description: "",
    subtasks: [],
  });

  const handleSettingFormValue = (e: InputEvent | TextAreaEvent) => {
    const { name, value } = e.currentTarget;

    setAddNewTaskForm({
      ...addNewTaskForm(),
      [name]: value,
    });
  };

  const addNewSubtaskHandler = (name: string) => {
    setSubtasks([...subtasks(), name]);

    setAddNewTaskForm({
      ...addNewTaskForm(),
      subtasks: subtasks(),
    });
  };

  const handleSubmitForm = () => {
    console.log(addNewTaskForm());
    console.log("SUB", subtasks());
    console.log("SUB inc", subtasksIncrement());
  };

  return (
    <form class={Styles.addNewTaskForm}>
      <p class={Styles.addNewTaskFormTitle}>Add new task</p>
      <TextInput
        fieldName="title"
        placeholder="e.g. Take a coffee break"
        onChangeHandler={handleSettingFormValue}
        label="Title"
      />
      <Show when={subtasks().length > 0}>
        <p class={Styles.subtasksLabel}>Subtasks</p>
        <For each={subtasks()}>
          {(subtask) => (
            <TextInput
              fieldName={subtask}
              onChangeHandler={() => addNewSubtaskHandler(subtask)}
              placeholder="Add a subtask..."
            />
          )}
        </For>
      </Show>
      <Button
        label="+Add new subtask"
        secondary
        type="button"
        onClick={() => {
          addNewSubtaskHandler(
            `${addNewTaskForm()["title"]}-subtask-${subtasksIncrement()}`
          );
          setSubtasksIncrement(subtasksIncrement() + 1);
        }}
      />
      <TextArea
        fieldName="description"
        onChangeHandler={handleSettingFormValue}
        label="Description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little..."
      />
      <Button label="Add New Task" type="button" onClick={handleSubmitForm} />
    </form>
  );
};

export default AddNewTaskForm;
