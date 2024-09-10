import React, { useState, useEffect } from "react";
import axios from "axios";
import { updateExam } from "../../services/exam.service"; // Import API
import { Exam } from "../../interfaces/interfaces";

const API_URL = "http://localhost:8080";

export default function AddExam({
  onExamAdded,
  editExam,
}: {
  onExamAdded: () => void;
  editExam?: Exam;
}) {
  const [title, setTitle] = useState(editExam?.title || "");
  const [description, setDescription] = useState(editExam?.description || "");
  const [duration, setDuration] = useState<number | undefined>(
    editExam?.duration,
  );
  const [examSubjectsId, setExamSubjectsId] = useState<number | undefined>(
    editExam?.examSubjectsId,
  );

  // If editExam changes, populate form fields
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
    const examData = { title, description, duration, examSubjectsId };

    try {
      if (editExam) {
        await updateExam(editExam.id, examData); // Cập nhật đề thi
      } else {
        await axios.post(`${API_URL}/exams`, examData); // Thêm đề thi
      }
      onExamAdded(); // Gọi hàm refresh danh sách đề thi

      // Sau khi thêm hoặc sửa xong, làm trống các trường input
      setTitle("");
      setDescription("");
      setDuration(undefined);
      setExamSubjectsId(undefined);
    } catch (error) {
      console.error("Error submitting exam", error);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl">
        {editExam ? "Sửa đề thi" : "Thêm đề thi"}
      </h2>
      <div className="mb-4">
        <label className="mb-2 block">Tiêu đề</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border-gray-300 w-full rounded border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block">Mô tả</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="border-gray-300 w-full rounded border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block">Thời lượng (phút)</label>
        <input
          type="number"
          value={duration || ""}
          onChange={(e) => setDuration(parseInt(e.target.value))}
          required
          className="border-gray-300 w-full rounded border p-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block">Mã môn thi</label>
        <input
          type="number"
          value={examSubjectsId || ""}
          onChange={(e) => setExamSubjectsId(parseInt(e.target.value))}
          required
          className="border-gray-300 w-full rounded border p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {editExam ? "Cập nhật đề thi" : "Thêm đề thi"}
      </button>
    </form>
  );
}
