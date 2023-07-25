import { createStore } from 'redux';

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_NOTE":
      return [...state, action.data];
    
      case "TOGGLE_IMPORTANCE":
        const id = action.data.id;
        const noteToChange = state.find(item => item.id === id);
        const changedNote = {...noteToChange, important: !noteToChange.important};
        return state.map(item => item.id !== id ? item : changedNote);
    default:
    return state;
  };
};

export const store = createStore(noteReducer);

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "The app state is in redux store",
    important: true,
    id: 1
  }
});

store.dispatch({
  type: "NEW_NOTE",
  data: {
    content: "State changes are made with actions",
    important: false,
    id: 2
  }
});