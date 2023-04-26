import "../styles/message.css"

const Notifcation = ( {message} ) => {

  if (message === null) {
    return null;
  }

  const {content, error} = message;

  return (
    <div><p className={error ? "error-message" : "succes-messasge"}>{content}</p></div>
  )
}

export default Notifcation;