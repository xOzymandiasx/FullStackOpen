import { useDispatch, useSelector } from "react-redux";
import { toggleImportanceOf } from "../reducers/noteReducer";


const NotesList = () => {
  const dispatch = useDispatch();

  //Estado de mi aplicacion;
  const notes = useSelector(state => state);

  const toggleImportance = id => {
  dispatch(toggleImportanceOf(id));
  };

  return (
    <ul>
      {notes.map((item) => (
        <li key={item.id} onClick={()=>toggleImportance(item.id)}>
          {item.content} <strong>{item.important ? "important" : ""}</strong>{" "}
        </li>
      ))}
    </ul>
  );
};

export default NotesList;