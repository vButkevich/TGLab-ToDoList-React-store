import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppBar } from "../AppBar/AppBar";
import { TaskForm } from "../TaskForm/TaskForm";
import { TaskList } from "../TaskList/TaskList";
import { fetchTasks } from "../../redux/taskOperations";
import { Loader } from "../Loader/Loader";
import css from "./App.module.css";

const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <AppBar />
      <TaskForm />
      <TaskList />
      <Loader />
    </div>
  );
};
export default App;