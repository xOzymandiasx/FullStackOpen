import axios from "axios";

const baseUrl = "http://localhost:3001/api/login";

const login = async credentials => {
  const user = await axios.post(baseUrl, credentials);
  return user.data;
};

export default {login};