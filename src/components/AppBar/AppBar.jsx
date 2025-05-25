import { StatusFilter } from "../StatusFilter/StatusFilter";
import { TaskCounter } from "../TaskCounter/TaskCounter.jsx";
import css from "./AppBar.module.css";

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <TaskCounter />
      <StatusFilter />
    </header>
  );
};
