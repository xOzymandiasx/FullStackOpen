import axios from "axios";
const baseUrl = "http://localhost:5000/notes";

const getAll = async () => {
  const {data} = await axios.get(baseUrl);
  return data;
};

const create = async (newObject) => {
  const {data} = axios.post(baseUrl, newObject);
  return data;
};

const update = (id, newObject) => {
  const {data} = axios.put(`${baseUrl}/${id}`, newObject);
  return data;
};

export default { getAll, create, update,};
