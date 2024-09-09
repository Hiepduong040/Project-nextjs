import axios from "axios";

const API_URL = "http://localhost:8080"; // Adjust this URL if needed

// Fetch user data from the API
export const getDataUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
