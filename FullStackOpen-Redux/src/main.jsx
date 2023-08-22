// import { createStore, combineReducers } from "redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { CounterContextProvider } from "./counterUseReducer/context/CounterContext.jsx";
//*Store de notes y anecdotes;
// import store from "./Anecdotes/store/store.js";
// import store from "./store/store.js";

//*Renderizado de mis apps Notes y Anecdotes;
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* //*Contexto de ReactQuery */}
    <QueryClientProvider client={queryClient}>
    {/* //*Contexto de contador */}
    {/* <CounterContextProvider> */}
      <App />
    {/* </CounterContextProvider>      */}
    </QueryClientProvider>
  </React.StrictMode>
);
