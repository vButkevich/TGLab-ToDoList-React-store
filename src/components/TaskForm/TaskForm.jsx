import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import { addTask } from "../../redux/taskOperations";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.elements.text.value;

    if (text.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    dispatch(addTask(task));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        autoComplete="on"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
