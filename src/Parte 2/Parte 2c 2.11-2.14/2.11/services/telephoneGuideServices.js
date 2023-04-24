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

export default {getAll, create};