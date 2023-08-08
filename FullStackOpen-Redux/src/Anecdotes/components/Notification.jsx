import { useSelector } from "react-redux"

const Notification = () => {
  const notification = useSelector(({notification}) => notification);
  const style = {
    border: "solid",
    padding: "10",
    borderWidth: 1,
    display: notification.showDisplay ? "block" : "none"
  };
  // console.log(JSON.parse(JSON.stringify(notification)))
  console.log(notification)
  return (
    
    <div style={style}>
      {notification.message}
    </div>
  );
};

export default Notification;