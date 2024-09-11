import axios from "axios";
import { Question } from "../interfaces/interfaces"; 

const API_URL = "http://localhost:8080";

// API to get questions
export const getQuestions = async () => {
  const response = await axios.get(`${API_URL}/questions`);
  return response.data;
};

// API to add a new question
export const addQuestion = async (questionData: Omit<Question, "id">) => {
  const response = await axios.post(`${API_URL}/questions`, questionData);
  return response.data;
};

// API to update a question
export const updateQuestion = async (id: number, updatedData: Partial<Question>) => {
  const response = await axios.put(`${API_URL}/questions/${id}`, updatedData);
  return response.data;
};

// API to delete a question
export const deleteQuestion = async (id: number) => {
  const response = await axios.delete(`${API_URL}/questions/${id}`);
  return response.data;
};


// Get questions by exam
export const getQuestionsByExam = async (examId: string) => {
  const response = await axios.get(`${API_URL}/questions/?examId=${examId}`);
  return response.data;
};

// Get question by ID
export const getQuestionById = async (questionId: string) => {
  const response = await axios.get(`${API_URL}/questions/${questionId}`);
  return response.data;
};