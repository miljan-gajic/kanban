import Button from "@/components/Button/Button";
import Dropdown, { SelectedValue } from "@/components/Dropdown/Dropdown";
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

type Status = "TODO" | "IN_PROGRESS" | "DONE" | string

type Subtask = {
  title: string;
  description: string;
  status: Status
};

type FormState = {
  title: string;
  description: string;
  subtasks: Subtask[];
  status: Status;
};

const AddNewTaskForm = () => {
  const [subtasks, setSubtasks] = createSignal<string[]>([]);
  const [subtasksIncrement, setSubtasksIncrement] = createSignal(1);
  const [addNewTaskForm, setAddNewTaskForm] = createSignal<FormState>({
    title: "",
    description: "",
    subtasks: [],
    status: "TODO",
  });

  const handleSettingFormValue = (e: InputEvent | TextAreaEvent) => {
    const { name, value } = e.currentTarget;

    setAddNewTaskForm({
      ...addNewTaskForm(),
      [name]: value,
    });
  };

  const handleSettingSubtaskValue = (e: InputEvent) => {
    const { name, value } = e.currentTarget;

    if(name || value){
      setAddNewTaskForm({
        ...addNewTaskForm(),
        subtasks: [
          ...addNewTaskForm()["subtasks"],
          {
            title: name,
            description: value,
            status: "IN_PROGRESS",
          },
        ],
      });
    }

  };

  const removeSubtaskHandler = (subtaskName: string) => {
    const filteredOutSubtasks = subtasks().filter((sub) => sub !== subtaskName);
    const filterOutSubtaskFormValues = addNewTaskForm()["subtasks"].filter(
      (sub) => sub.title !== subtaskName
    );
    setSubtasks(filteredOutSubtasks);
    setAddNewTaskForm({
      ...addNewTaskForm(),
      subtasks: filterOutSubtaskFormValues,
    });
  };

  const addNewSubtaskHandler = (name: string) => {
    setSubtasks([...subtasks(), name]);
  };

  const addStatusToForm = (newValue: SelectedValue | SelectedValue[]) => {
    if(!Array.isArray(newValue)){
      const { value: taskStatus} = newValue || {}
      setAddNewTaskForm({
        ...addNewTaskForm(),
        status: taskStatus,
      });
    }
  };

  const handleSubmitForm = () => {
    console.log(addNewTaskForm());
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
      <TextArea
        fieldName="description"
        onChangeHandler={handleSettingFormValue}
        label="Description"
        placeholder="e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little..."
      />
      <Show when={subtasks().length > 0}>
        <p class={Styles.subtasksLabel}>Subtasks</p>
        <For each={subtasks()}>
          {(subtask) => (
            <TextInput
              fieldName={subtask}
              onChangeHandler={handleSettingSubtaskValue}
              placeholder="Add a subtask..."
              customHandler={() => removeSubtaskHandler(subtask)}
              icon
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
            `${addNewTaskForm()
              ["title"].split(" ")
              .join(" ")}-subtask-${subtasksIncrement()}`
          );
          setSubtasksIncrement(subtasksIncrement() + 1);
        }}
      />
      <Dropdown
        placeHolder="Select the status for your task..."
        options={[
          { label: "Todo", value: "TODO" },
          { label: "In Progress", value: "IN_PROGRESS" },
          { label: "Done", value: "DONE" },
        ]}
        showLabel
        onChange={addStatusToForm}
      />
      <Button label="Add New Task" type="button" onClick={handleSubmitForm} />
    </form>
  );
};

export default AddNewTaskForm;
