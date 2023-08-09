import { useDispatch } from "react-redux";
import { createNote } from "../reducers/noteReducer";

const NotesForm = () => {
  const dispatch = useDispatch();

  //Separamos los tipos de forma en funciones;
  const addNote = async e => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNote}>
      <input type="text" name="note" />
      <button type="submit">Add</button>
    </form>
);
};

export default NotesForm;