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
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";

const Notes = () => {
  return (
    <>
      <NotesForm />
      <NotesList />
    </>
  );
};

export default Notes;
