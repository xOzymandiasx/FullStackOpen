const Notification = ({notification}) => {

  const {notColor, message, author} = notification;

  return (
   <div>
    {message !== null
     ? <p style={{color: notColor}}>A new blog {message} by {author}</p> 
     : <p style={{color: notColor}}>Wrong credentials</p>} 
   </div>
  );
};

export default Notification;