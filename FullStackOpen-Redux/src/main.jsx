// import { createStore, combineReducers } from "redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import noteReducer from "./reducers/noteReducer.js";
import filterReducer from "./reducers/filterReducer.js";
import anecdoteReducer from "./Anecdotes/reducers/anecdotesReducer.js";
// const store = createStore(anecdoteReducer);

//* Store de la aplicacion principal
// const store = configureStore({
//   reducer: {
//     notes: noteReducer,
//     filter: filterReducer
//   }
// });

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
