import { useMutation, useQuery, useQueryClient } from "react-query";
import { createNote, getNotes, updateNote } from "../services/requests";

const NotesApp = () => {
  const queryClient = useQueryClient();
  const newNoteMutation = useMutation(createNote, {
    onSuccess: () => queryClient.invalidateQueries("notes"),
  });
  const updateNoteMutation = useMutation(updateNote, {
    onSuccess: () => queryClient.invalidateQueries("notes"),
  });

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = "";
    newNoteMutation.mutate({content, important: true});
  };

  const toggleImportance = (note) => {
    updateNoteMutation.mutate({...note, important: !note.important});
  };

  const result = useQuery("notes", getNotes);
  console.log(result);

  if (result.isLoading) return <div>Loadin data...</div>;

  const notes = result.data;

  return (
    <div>
      <h2>Notes app</h2>
      <form onSubmit={addNote}>
        <input name="note" />
        <button type="submit">add</button>
      </form>
      {notes.map((note) => (
        <li key={note.id} onClick={() => toggleImportance(note)}>
          {note.content}
          <strong> {note.important ? "important" : ""}</strong>
        </li>
      ))}
    </div>
  );
};

export default NotesApp;
