import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
// import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import noteReducer from "./reducers/noteReducer.js";
import filterReducer from "./reducers/filterReducer.js";
import anecdoteReducer from "./Anecdotes/reducers/anecdotesReducer.js";
// const store = createStore(anecdoteReducer);


const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
