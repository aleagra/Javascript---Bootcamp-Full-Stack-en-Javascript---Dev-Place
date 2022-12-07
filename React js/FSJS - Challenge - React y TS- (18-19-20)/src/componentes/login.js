import axios from "axios";
const url = "http://localhost:3030/user/post";

export const login = async (credentials) => {
  const { data } = await axios.post(url, credentials);
  return data;
};
