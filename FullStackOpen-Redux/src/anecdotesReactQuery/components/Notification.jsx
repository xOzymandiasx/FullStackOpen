import { notificationValue } from "../context/NotificationContext";

const Notification = () => {

  const {message, display} = notificationValue(); 
  
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    display
  };

  return <p style={style}>{message}</p>;
};

export default Notification;
