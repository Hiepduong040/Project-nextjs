import { Courses } from "../interfaces/interfaces"
import axios from "axios";

const API_URL = '  http://localhost:8080'

export const getQuestions = async () => {
  const response = await axios.get(`${API_URL}/questions`);
  return response.data;
};