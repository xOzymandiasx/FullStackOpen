// import {store} from "../reducers/noteReducer";
// const generateId = () => Number((Math.random() * 1000000).toFixed(0));
// //Funciones creadoras de acciones;
// const createNote = (content) => {
//   return {
//     type: "NEW_NOTE",
//     data: {
//       content,
//       important: false,
//       id: generateId()
//     }
//   };
// };
// const toggleImportanceOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     data: {id}
//   };
// };

import { createNote, toggleImportanceOf } from "../reducers/noteReducer";
import { useSelector, useDispatch } from "react-redux";

const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state);

  //Separamos los tipos de forma en funciones;
  const addNote = e => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    dispatch(createNote(content));
  };

  const toggleImportance = id => {
  dispatch(toggleImportanceOf(id));
  };

  return (
    <>
      <form onSubmit={addNote}>
        <input type="text" name="note" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {notes.map((item) => (
          <li key={item.id} onClick={()=>toggleImportance(item.id)}>
            {item.content} <strong>{item.important ? "important" : ""}</strong>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
