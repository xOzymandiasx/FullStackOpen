import axios from "axios";

const url = "http://localhost:3001/notes";

const getAll = async() => {
  const {data} = await axios.get(url);
  return data;
};

const addNote = async(content) => {
  const {data} = await axios.post(url, {content, important: false,});
  return data; 
};

const updateNote = async(id, note) => {
  const {data} = await axios.put(`${url}/${id}`, note);
  return data;
}

export default {getAll, addNote, updateNote};