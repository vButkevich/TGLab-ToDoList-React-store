import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";

export const TaskCounter = () => {

  const tasks = useSelector((state) => state.tasks.items);

  const count = tasks.reduce(
    (acc, tasks) => {
      if (tasks.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      acc.all += 1;
      return acc;
    },
    { all: 0, active: 0, completed: 0 }
  );

  return (
    <section className={css.section}>
      <h2 className={css.title}>Tasks: [ {count.all} ]</h2>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </section>
  );
};
