import axios from "axios";
const baseUrl = "http://localhost:5000/api/v1/auth/";


export const signup = (data) => {
  return axios.post(`${baseUrl}register`, data);
};