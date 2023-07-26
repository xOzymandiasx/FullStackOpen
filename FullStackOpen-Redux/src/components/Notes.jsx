import {store} from "../reducers/noteReducer";

const Notes = () => {
  const generateId = () => Number((Math.random() * 1000000).toFixed(0));

  const addNote = e => {
    e.preventDefault();
    const content = e.target.note.value;
    e.target.note.value = '';
    store.dispatch({
      type: "NEW_NOTE",
      data: {
        content,
        important: false,
        id: generateId()
      }
    });
    console.log(store.getState())
  };

  return (
    <>
      <form onSubmit={addNote}>
        <input type="text" name="note" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {store.getState().map((item) => (
          <li key={item.id}>
            {item.content} <strong>{item.important ? "important" : ""}</strong>{" "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Notes;
