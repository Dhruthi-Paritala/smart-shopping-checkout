import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001",  // MUST BE THIS
});

export default API;