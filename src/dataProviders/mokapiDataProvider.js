import axios from "axios";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasksAsync = async () => {
  const response = await axios.get("/tasks");
  return response.data;
};

export const addTaskAsync = async (task) => {
  const response = await axios.post("/tasks", { task });
  return response.data;
};

export const toggleTaskCompletedAsync = async (task) => {
  const response = await axios.put(`/tasks/${task.id}`, {
    completed: !task.completed,
  });
  return response.data;
};

export const deleteTaskAsync = async (taskId) => {
  const response = await axios.delete(`/tasks/${taskId}`);
  return response.data;
};