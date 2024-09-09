import axios from 'axios';

const API_URL = "http://localhost:8080/courses";

// Thêm khóa học mới
export const addCourse = async (course: { title: string; description: string; numberOfQuestions: number }) => {
  const response = await axios.post(API_URL, course);
  return response.data;
};

// Lấy danh sách khóa học
export const getCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Xóa khóa học
export const deleteCourse = async (courseId: number) => {
  const response = await axios.delete(`${API_URL}/${courseId}`);
  return response.data;
};

// Cập nhật khóa học
export const updateCourse = async (courseId: number, updatedCourse: { title: string; description: string; numberOfQuestions: number }) => {
  const response = await axios.put(`${API_URL}/${courseId}`, updatedCourse);
  return response.data;
};
