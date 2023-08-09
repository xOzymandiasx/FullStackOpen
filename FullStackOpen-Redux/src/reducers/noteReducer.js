// import { createStore } from 'redux';
import { createSlice } from "@reduxjs/toolkit";
import noteServices from "../services/notes";

// const initialState = [
//     { content: 'reducer defines how redux store works', important: true, id: 1},
//     { content: 'state of store can contain any data', important: false, id: 2}
//   ];

// const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const noteSlice = createSlice({
  name: "notes",
  initialState: [],
  reducers: {
    toggleImportanceOf(state, action) {
      const updatedNote = action.payload;
      console.log(JSON.parse(JSON.stringify(state))); //Debido a que redux-toolkit utiliza la libreria immer para guardar el estado, para que sea legible preimero lo pasamos a formato Json y luego a objeto Js;
      return state.map(item => item.id === updatedNote.id ? updatedNote : item);
    },
    appendNote(state, action) {
      state.push(action.payload);
    },
    setNotes(state, action) {
      return action.payload;
    },
  },
});

export const { toggleImportanceOf, appendNote, setNotes } = noteSlice.actions;

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await noteServices.getAll();
    dispatch(setNotes(notes));
  };
};

export const createNote = content => {
  return async dispatch => {
    const newNote = await noteServices.addNote(content);
    dispatch(appendNote(newNote));
  };
};

export default noteSlice.reducer;

//*Manera antigua para crear reducers y acciones
// export const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "NEW_NOTE":
//       return [...state, action.data];
    
//       case "TOGGLE_IMPORTANCE":
//         const id = action.data.id;
//         const noteToChange = state.find(item => item.id === id);
//         const changedNote = {...noteToChange, important: !noteToChange.important};
//         return state.map(item => item.id !== id ? item : changedNote);
//     default:
//     return state;
//   };
// };
//Funciones creadoras de acciones;
// export const createNote = (content) => {
//   return {
//     type: "NEW_NOTE",
//     data: {
//       content,
//       important: false,
//       id: generateId()
//     }
//   };
// };

// export const toggleImportanceOf = (id) => {
//   return {
//     type: "TOGGLE_IMPORTANCE",
//     data: {id}
//   };
// };

// export default noteReducer;


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