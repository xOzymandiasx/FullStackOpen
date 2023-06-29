import { useState } from "react";

const Togglable = (props) => {
  const [logDisplay, setLogDisplay] = useState(false);

  const hideWhenVisible = { display: logDisplay ? 'none' : '' }
  const showWhenVisible = { display: logDisplay ? '' : 'none' }
  
  const toggleVisibility = () => setLogDisplay(!logDisplay);

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <button onClick={toggleVisibility}>cancel</button>
      </div>
    </div>
  )
}

export default Togglable