import { useDispatch } from "react-redux";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import VisibilityFilter from "./VisibilityFilter";
import noteService from "../services/notes"
import { useEffect } from "react";
import { setNotes } from "../reducers/noteReducer";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    noteService.getAll()
     .then(res => dispatch(setNotes(res)));
  }, []);
  

  return (
    <>
      <NotesForm />
      <VisibilityFilter />
      <NotesList />
    </>
  );
};

export default Notes;
