import axios from "axios";

const API_URL = "http://localhost:8080"; // Adjust this URL if needed

// Fetch user data from the API with optional search by username
export const getDataUser = async (searchTerm: string = "") => {
  try {
    const response = await axios.get(`${API_URL}/users`, {
      params: { username_like: searchTerm }, // tìm kiếm theo tên
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
