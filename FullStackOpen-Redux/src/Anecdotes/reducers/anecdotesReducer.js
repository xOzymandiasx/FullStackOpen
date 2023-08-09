import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { 
//     anecdote: "If it hurts, do it more often", 
//     votes: 0,
//     id: 1 
//   },
//   {
//     anecdote: "Adding manpower to a late software project makes it later!",
//     votes: 0,
//     id: 2
//   },
//   {
//     anecdote:
//       "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     votes: 0,
//     id: 3
//   },
//   {
//     anecdote:
//       "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     votes: 0,
//     id: 4
//   },
//   { 
//     anecdote: "Premature optimization is the root of all evil.", 
//     votes: 0, 
//     id: 5
//   },
//   {
//     anecdote:
//       "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     votes: 0,
//     id: 6
//   },
// ];

// const anecdoteReducer = (state = initialAnecdores, action) => {
//   switch (action.type) {
//     case "NEW_ANECDOTE":
//       return [...state, action.data];

//     case "VOTE":
//      const anecdoteToVote = state.find(item => item.id === action.data.id);
//      const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1};
//      return state.map(item => item.id === action.data.id ? votedAnecdote :item);

//     default:
//       return state;
//   };
// };

// const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload);
    },
    voteUp(state, action) {
      const id = action.payload;
      const anecdoteToVote = state.find(item => item.id === id);
      const votedAnecdote = {...anecdoteToVote, votes: anecdoteToVote.votes + 1};
      return state.map(item => item.id === id ? votedAnecdote : item);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  }
});

// export const createAnecdote = anecdote => {
//   return {
//     type: "NEW_ANECDOTE",
//     data: {
//       anecdote,
//       votes: 0,
//       id: generateId()
//     }
//   };
// };

// export const voteUp = id => {
//   return {
//     type: "VOTE",
//     data: {id}
//   };
// };

export const {createAnecdote, voteUp, setAnecdotes} = anecdoteSlice.actions;



export default anecdoteSlice.reducer;