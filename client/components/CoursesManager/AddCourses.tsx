// add task #12221, #12222, #12223, #12224 
import React, { useState } from "react";
import { addCourse } from "../../services/courses.service"; // Update the path if needed

interface AddCoursesProps {
  onCourseAdded: () => void;
}

export default function AddCourses({ onCourseAdded }: AddCoursesProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState<number | "">("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await addCourse({
        title,
        description,
        numberOfQuestions: Number(numberOfQuestions),
      });
      setTitle("");
      setDescription("");
      setNumberOfQuestions("");
      setError(null);
      onCourseAdded(); // Refresh the course list
    } catch (error) {
      console.error("Error adding course:", error);
      setError("Failed to add course. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-lg">
      <h2 className="text-gray-900 mb-4 text-2xl font-semibold">
        Add New Course
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="text-gray-700 text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-gray-300 mt-1 block w-full rounded-md border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-gray-700 text-sm font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-gray-300 mt-1 block w-full rounded-md border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="numberOfQuestions"
            className="text-gray-700 text-sm font-medium"
          >
            Number of Questions
          </label>
          <input
            type="number"
            id="numberOfQuestions"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(Number(e.target.value))}
            className="border-gray-300 mt-1 block w-full rounded-md border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Course
        </button>
      </form>
    </div>
  );
}
