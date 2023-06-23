import axios from "axios";

const baseUrl = "http://localhost:3001/api/blogs";
let token = null;

const setToken = newToken => token = `bearer ${newToken}`;

const create = async blog => {
  const config = {
    headers: {Authorization: token}
  };

  const {data} = await axios.post(baseUrl, blog, config);
  return data;
};

export default { setToken, create};