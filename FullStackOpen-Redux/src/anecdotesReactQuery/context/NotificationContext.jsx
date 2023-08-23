import { useContext } from "react";
import { createContext, useReducer } from "react";

const initialState = {
  message: "",
  display: "none"
};

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "MESSAGE":
      return action.payload;
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const CounterContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, initialState);

  return(  
  <NotificationContext.Provider value={[notification, notificationDispatch]}>
    {props.children}
  </NotificationContext.Provider>
  );
};

export const notificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return notificationAndDispatch[0];
};
export const notificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext);
  return notificationAndDispatch[1];
};

export default NotificationContext;