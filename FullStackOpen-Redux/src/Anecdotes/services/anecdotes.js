import axios from "axios";

const url = "http://localhost:3001/anecdotes";

const getAll = async() => {
  const {data} = await axios.get(url);
  return data;
};

const addAnecdote = async (content) => {
  const {data} = await axios.post(url, {content, votes: 0});
  return data;
}

const updateAnecdote = async (id, anecdote) => {
  const {data} = await axios.put(`${url}/${id}`, anecdote);
  return data;
};

export default {getAll, addAnecdote, updateAnecdote};