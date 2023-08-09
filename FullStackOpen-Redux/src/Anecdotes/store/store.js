import { configureStore } from "@reduxjs/toolkit";
import anecdotesReducer from "../reducers/anecdotesReducer";
import notificationReducer from "../reducers/notificationReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdotesReducer,
    notification: notificationReducer,
  },
});

export default store;