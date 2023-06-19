import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

let token = null;
const setToken = newToken => token = `bearer ${newToken}`;


const getAll = async () => {
  const {data} = await axios.get(baseUrl);
  return data;
};

const create = async (newObject) => {
  const config = {
    headers: {Authorization: token}
  };

  const {data} = await axios.post(baseUrl, newObject, config);
  return data;
};

const update = (id, newObject) => {
  const {data} = axios.put(`${baseUrl}/${id}`, newObject);
  return data;
};

export default { getAll, create, update, setToken};
