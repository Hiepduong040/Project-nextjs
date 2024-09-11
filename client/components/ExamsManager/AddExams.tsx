import React, { useEffect, useState } from "react";
import { addExam, updateExam } from "../../services/exam.service"; // Services for add/update
import { getSubject } from "../../services/subject.service"; // Service to fetch subjects
import { Exam, ExamSubject } from "../../interfaces/interfaces"; // Assuming interfaces

export default function AddExam({
  onExamAdded,
  editExam,
}: {
  onExamAdded: () => void;
  editExam?: Exam;
}) {
  const [title, setTitle] = useState(editExam?.title || "");
  const [description, setDescription] = useState(editExam?.description || "");
  const [duration, setDuration] = useState<number>(editExam?.duration || 0);
  const [examSubjectsId, setExamSubjectsId] = useState<number | null>(
    editExam?.examSubjectsId || null,
  );
  const [subjects, setSubjects] = useState<ExamSubject[]>([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await getSubject();
        setSubjects(response);
      } catch (error) {
        console.error("Error fetching subjects", error);
      }
    };

    fetchSubjects();
  }, []);

  useEffect(() => {
    if (editExam) {
      setTitle(editExam.title);
      setDescription(editExam.description);
      setDuration(editExam.duration);
      setExamSubjectsId(editExam.examSubjectsId);
    }
  }, [editExam]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!examSubjectsId) {
      alert("Please select a subject.");
      return;
    }

    const examData = {
      title,
      description,
      duration,
      examSubjectsId,
    };

    try {
      if (editExam) {
        await updateExam(editExam.id, examData); // Update mode
        alert("Exam updated successfully!");
      } else {
        await addExam(examData); // Add mode
        alert("Exam added successfully!");
      }
      onExamAdded(); // Refresh the list after adding/updating
      setTitle("");
      setDescription("");
      setDuration(0);
      setExamSubjectsId(null);
    } catch (error) {
      console.error("Error submitting exam", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl">
        {editExam ? "Sửa Đề Thi" : "Thêm Đề Thi"}
      </h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium">
          Tiêu đề
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full rounded border p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium">
          Mô tả
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full rounded border p-2"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="duration" className="block text-sm font-medium">
          Thời lượng (phút)
        </label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(Number(e.target.value))}
          className="mt-1 w-full rounded border p-2"
          required
        />
      </div>

      {/* Exam Subjects Dropdown */}
      <div className="mb-4">
        <label htmlFor="subject" className="block text-sm font-medium">
          Môn thi
        </label>
        <select
          id="subject"
          value={examSubjectsId ?? ""}
          onChange={(e) => setExamSubjectsId(Number(e.target.value))}
          className="mt-1 w-full rounded border p-2"
          required
        >
          <option value="">Chọn môn thi</option>
          {subjects.map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.title}
            </option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {editExam ? "Cập Nhật Đề Thi" : "Thêm Đề Thi"}
      </button>
    </form>
  );
}
