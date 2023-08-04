// import { createStore } from 'redux';

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { content: 'reducer defines how redux store works', important: true, id: 1},
    { content: 'state of store can contain any data', important: false, id: 2}
  ];

export const noteReducer = (state = initialState, action) => {
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

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    createNote(state, action) {
      const content = action.payload
      state.push({
        content,
        important: false,
        id: generateId()
      })
    },
    toggleImportanceOf(state, action) {
      
    }
  }

})

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