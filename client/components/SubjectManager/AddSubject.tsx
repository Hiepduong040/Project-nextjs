// add task #12217, #12218, #12219, #12220
import { useState, useEffect } from "react";

interface AddSubjectProps {
  onSubjectAdded: (subject: {
    title: string;
    description: string;
    coursesId: number;
  }) => void;
  editingSubject: {
    id: number;
    title: string;
    description: string;
    coursesId: number;
  } | null;
  onSubjectUpdated: (
    id: number,
    updatedData: { title: string; description: string; coursesId: number },
  ) => void;
  courses: { id: number; title: string }[]; // các option khóa học để select
}

export default function AddSubject({
  onSubjectAdded,
  editingSubject,
  onSubjectUpdated,
  courses,
}: AddSubjectProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  useEffect(() => {
    if (editingSubject) {
      setTitle(editingSubject.title);
      setDescription(editingSubject.description);
      setSelectedCourseId(editingSubject.coursesId);
    } else {
      resetForm();
    }
  }, [editingSubject]);

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setSelectedCourseId(null);
  };

  const handleSubmit = () => {
    if (!title || !description || selectedCourseId === null) {
      alert("Vui lòng điền vào tất cả các trường.");
      return;
    }

    const newSubject = {
      title,
      description,
      coursesId: selectedCourseId,
    };

    if (editingSubject) {
      onSubjectUpdated(editingSubject.id, newSubject);
    } else {
      onSubjectAdded(newSubject);
    }

    resetForm();
  };

  return (
    <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-gray-700 mb-6 text-2xl font-semibold">
        {editingSubject ? "Edit Subject" : "Add Subject"}
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Subject Title"
          className="border-gray-300 w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Subject Description"
          className="border-gray-300 h-32 w-full resize-none rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={selectedCourseId ?? ""}
          onChange={(e) => setSelectedCourseId(Number(e.target.value))}
          className="border-gray-300 w-full rounded-lg border p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled>
            Select a Course
          </option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.title}
            </option>
          ))}
        </select>
        <button
          onClick={handleSubmit}
          className="w-full rounded-lg bg-blue-500 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {editingSubject ? "Update Subject" : "Add Subject"}
        </button>
      </div>
    </div>
  );
}
