import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import noteReducer from "./reducers/noteReducer.js";
import anecdoteReducer from "./Anecdotes/reducers/anecdotesReducer.js";
// const store = createStore(noteReducer);
const store = createStore(anecdoteReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
