import React, { useState } from "react";
import { deleteCourse, updateCourse } from "../../services/courses.service"; // Update the path if needed

interface TableCoursesProps {
  courses: any[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onCourseDeleted: () => void;
  onCourseUpdated: () => void;
}

export default function TableCourses({
  courses,
  currentPage,
  totalPages,
  onPageChange,
  onCourseDeleted,
  onCourseUpdated,
}: TableCoursesProps) {
  const [editCourseId, setEditCourseId] = useState<number | null>(null);
  const [editCourseData, setEditCourseData] = useState<{
    title: string;
    description: string;
    numberOfQuestions: number;
  } | null>(null);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const handleDelete = async (courseId: number) => {
    try {
      await deleteCourse(courseId);
      onCourseDeleted(); // Refresh the course list after deletion
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleEdit = (course: {
    id: number;
    title: string;
    description: string;
    numberOfQuestions: number;
  }) => {
    setEditCourseId(course.id);
    setEditCourseData({
      title: course.title,
      description: course.description,
      numberOfQuestions: course.numberOfQuestions,
    });
  };

  const handleUpdate = async () => {
    if (editCourseId && editCourseData) {
      try {
        await updateCourse(editCourseId, editCourseData);
        onCourseUpdated(); // Refresh the course list after update
        setEditCourseId(null);
        setEditCourseData(null);
      } catch (error) {
        console.error("Error updating course:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="px-6 py-4 text-sm text-gray-900">{course.title}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{course.description}</td>
              <td className="px-6 py-4 text-sm font-medium">
                <button
                  onClick={() => handleEdit(course)}
                  className="text-blue-600 hover:text-blue-800 mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editCourseId && editCourseData && (
        <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Course</h2>
          <input
            type="text"
            value={editCourseData.title}
            onChange={(e) =>
              setEditCourseData({ ...editCourseData, title: e.target.value })
            }
            placeholder="Course Title"
            className="block w-full border border-gray-300 rounded-md p-3 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            value={editCourseData.description}
            onChange={(e) =>
              setEditCourseData({
                ...editCourseData,
                description: e.target.value,
              })
            }
            placeholder="Course Description"
            className="block w-full border border-gray-300 rounded-md p-3 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={editCourseData.numberOfQuestions}
            onChange={(e) =>
              setEditCourseData({
                ...editCourseData,
                numberOfQuestions: parseInt(e.target.value, 10),
              })
            }
            placeholder="Number of Questions"
            className="block w-full border border-gray-300 rounded-md p-3 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleUpdate}
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Update
          </button>
        </div>
      )}
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePreviousPage}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded-md border ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-white text-blue-600"} border-blue-600`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
