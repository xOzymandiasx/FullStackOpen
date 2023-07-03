import { useState } from "react";

const Togglable = (props) => {
  const [windowDisplay, setWindowDisplay] = useState(false);

  const showDisplay = {display: windowDisplay ? "none" : ""};
  const hideDisplay = {display: windowDisplay ? "" : "none"};

  return (
    <>
    <div style={showDisplay}><button onClick={()=> setWindowDisplay(!windowDisplay)}>{props.button}</button></div>
    <div style={hideDisplay}>
      {props.children}
      <button onClick={()=> setWindowDisplay(!windowDisplay)}>Cancel</button>
    </div>
    </>
    
  );
};

export default Togglable;