import axios from "axios";

const url = "http://localhost:5000/persons";

const getAll = async () => {
  const {data} = await axios.get(url);
  return data;
};

const create = async (person) => {
  const {data} = await axios.post(url, person);
  return data;
};

const del = async (id) => {
  const {data} = await axios.delete(`${url}/${id}`);
  return data;
};

const update = async (person) => {
  const {data} = await axios.put(`${url}/${person.id}`, person);
  return data;
};

export default {getAll, create, del, update};