import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchTasksAsync,
  addTaskAsync,
  deleteTaskAsync,
  toggleTaskCompletedAsync,
} from "../dataProviders/taskDataProvider";
// import {
//   fetchTasksAsync,
//   addTaskAsync,
//   deleteTaskAsync,
//   toggleTaskCompletedAsync,
// } from "../dataProviders/mokapiDataProvider";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      return fetchTasksAsync();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, thunkAPI) => {
    try {
      return addTaskAsync(task);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      return deleteTaskAsync(taskId);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (task, thunkAPI) => {
    try {
      return toggleTaskCompletedAsync(task);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
