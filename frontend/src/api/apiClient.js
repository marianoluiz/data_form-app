import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api", // Adjust as necessary
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
