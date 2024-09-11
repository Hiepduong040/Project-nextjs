import axios from 'axios';

const API_URL = 'http://localhost:8080';

// Fetch all exams
export const getExams = async () => {
  const response = await axios.get(`${API_URL}/exams`);
  return response.data;
};

// Add a new exam
export const addExam = async (exam: any) => {
  const response = await axios.post(`${API_URL}/exams`, exam);
  return response.data;
};

// Update an existing exam
export const updateExam = async (id: number, updatedExam: any) => {
  const response = await axios.put(`${API_URL}/exams/${id}`, updatedExam);
  return response.data;
};

// Delete an exam
export const deleteExam = async (id: number) => {
  const response = await axios.delete(`${API_URL}/exams/${id}`);
  return response.data;
};

// Get exams by subject
export const getExamsBySubject = async (subjectId: string) => {
  const response = await axios.get(`${API_URL}/exams/?subjectId=${subjectId}`);
  return response.data;
};