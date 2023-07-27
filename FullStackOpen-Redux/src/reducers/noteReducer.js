// import { createStore } from 'redux';

export const noteReducer = (state = [], action) => {
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

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

//Funciones creadoras de acciones;
export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    data: {
      content,
      important: false,
      id: generateId()
    }
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    data: {id}
  };
};

export default noteReducer;

// export const store = createStore(noteReducer);

// store.dispatch({
//   type: "NEW_NOTE",
//   data: {
//     content: "The app state is in redux store",
//     important: true,
//     id: 1
//   }
// });

// store.dispatch({
//   type: "NEW_NOTE",
//   data: {
//     content: "State changes are made with actions",
//     important: false,
//     id: 2
//   }
// });