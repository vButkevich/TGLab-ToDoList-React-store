import { getData, setData } from "./localStorageHelper";

export const getTasks = () => {
  const tasks = getData("tasks");
  return tasks;
};
export const fetchTasksAsync = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tasks = getTasks();
      resolve(tasks);
    }, 500);
  });
};

export const addTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  setData("tasks", tasks);
  return task;
};
export const addTaskAsync = async (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      addTask(task);
      resolve(task);
    }, 444);
  });
};

export const toggleTaskCompleted = (task) => {
  const tasks = getTasks().map((t) =>
    t.id === task.id ? { ...t, completed: !t.completed } : t
  );
  setData("tasks", tasks);
  return { ...task, completed: !task.completed };
};
export const toggleTaskCompletedAsync = async (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const t = toggleTaskCompleted(task);
      resolve(t);
    }, 222);
  });
};

export const deleteTask = (taskId) => {
  const tasks = getTasks();
  const t = tasks.filter((t) => t.id !== taskId);
  setData("tasks", t);
  return taskId;
};
export const deleteTaskAsync = async (taskId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      deleteTask(taskId);
      resolve(taskId);
    }, 333);
  });
};
