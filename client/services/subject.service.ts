import axios from "axios";

const API_URL = "http://localhost:8080";
// Fetch total exams
export const getSubject = async () => {
  const response = await axios.get(`${API_URL}/examSubjects`);
  return response.data;
};

export const updateSubject = async (id: number, updatedData: { title: string; description: string; coursesId: number }) => {
  const response = await axios.put(`${API_URL}/examSubjects/${id}`, updatedData);
  return response.data;
};

// Add new subject
export const addSubject = async (newSubject: { title: string; description: string; coursesId: number }) => {
  const response = await axios.post(`${API_URL}/examSubjects`, newSubject);
  return response.data;
};

// Delete subject
export const deleteSubject = async (id: number) => {
  const response = await axios.delete(`${API_URL}/examSubjects/${id}`);
  return response.data;
};
