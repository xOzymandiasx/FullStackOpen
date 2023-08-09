import { useDispatch } from "react-redux";
import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import VisibilityFilter from "./VisibilityFilter";
import { useEffect } from "react";
import { initializeNotes, setNotes } from "../reducers/noteReducer";

const Notes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotes());
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
