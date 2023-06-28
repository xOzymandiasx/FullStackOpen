const Notification = ({notification}) => {

  const {notColor, message} = notification;

  return (
   <div>
    <p>Todos putos</p>
    {/* {message !== null
     ? <p style={{color: notColor}}>{message}</p> 
     : <p style={{color: notColor}}>Wrong credentials</p>}  */}
   </div>
  );
};

export default Notification;