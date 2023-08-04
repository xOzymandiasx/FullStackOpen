import NotesForm from "./NotesForm";
import NotesList from "./NotesList";
import VisibilityFilter from "./VisibilityFilter";

const Notes = () => {
  return (
    <>
      <NotesForm />
      <VisibilityFilter />
      <NotesList />
    </>
  );
};

export default Notes;
