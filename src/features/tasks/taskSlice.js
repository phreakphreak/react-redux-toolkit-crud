import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
          task.description = action.payload.description;
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
