const Notification = ({props}) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  return <p style={style}>{props}</p>;
};

export default Notification;
