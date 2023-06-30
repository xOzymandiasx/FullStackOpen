import { useState } from "react";

const Togglable = (props) => {
  const [display, setDisplay] = useState(false);

  const showDisplay = {display: display ? true : ""};
  const hideDisplay = {display: display ? "" : false};

  return (
    <>
    <div style={showDisplay}><button onClick={setDisplay(!display)}>New Blog</button></div>
    </>
    
  );
};

export default Togglable;