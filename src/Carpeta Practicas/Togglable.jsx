import { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from 'prop-types';

const Togglable = forwardRef((props, refs) => { //La función que crea el componente está envuelta dentro de una llamada de función forwardRef. De esta forma el componente puede acceder a la referencia que le está asignada;
  const [logDisplay, setLogDisplay] = useState(false);

  const hideWhenVisible = { display: logDisplay ? 'none' : '' }
  const showWhenVisible = { display: logDisplay ? '' : 'none' }
  
  const toggleVisibility = () => setLogDisplay(!logDisplay);

  useImperativeHandle(refs, () => { //El componente usa el hook useImperativeHandle para que su función toggleVisibility esté disponible fuera del componente.se usa para definir funciones en un componente que se pueden invocar desde fuera del componente;
      return {toggleVisibility}
    })

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
  );
});

Togglable.displayName = "Togglable";

Togglable.propTypes ={
  buttonLabel: PropTypes.string.isRequired,
}

export default Togglable;