import React, { useEffect, useState } from "react";
import { deleteExam, getExams } from "../../services/exam.service"; // Assuming correct path
import { Exam } from "../../interfaces/interfaces"; // Update the correct path

interface TableExamsProps {
  refresh: boolean;
  onEdit: (exam: Exam) => void; // Prop to trigger edit
}

export default function TableExams({ refresh, onEdit }: TableExamsProps) {
  const [exams, setExams] = useState<Exam[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getExams();
        setExams(response);
      } catch (error) {
        console.error("Error fetching exams", error);
      }
    };

    fetchExams();
  }, [refresh]);

  // Handle delete
  // Handle delete
  const handleDelete = async (id: number) => {
    try {
      await deleteExam(id); // Gọi API xóa đề thi
      alert("Exam deleted successfully!");

      // Sau khi xóa thành công, cập nhật lại danh sách exams bằng cách loại bỏ exam vừa xóa
      setExams((prevExams) => prevExams.filter((exam) => exam.id !== id));
    } catch (error) {
      console.error("Error deleting exam", error);
    }
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl">Danh sách đề thi</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border-b py-2">ID</th>
            <th className="border-b py-2">Tiêu đề</th>
            <th className="border-b py-2">Mô tả</th>
            <th className="border-b py-2">Thời lượng (phút)</th>
            <th className="border-b py-2">Mã môn thi</th>
            <th className="border-b py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td className="border-b py-2 text-center">{exam.id}</td>
              <td className="border-b py-2">{exam.title}</td>
              <td className="border-b py-2">{exam.description}</td>
              <td className="border-b py-2 text-center">{exam.duration}</td>
              <td className="border-b py-2 text-center">
                {exam.examSubjectsId}
              </td>
              <td className="border-b py-2 text-center">
                <button
                  className="mr-2 rounded bg-blue-500 px-4 py-1 text-white"
                  onClick={() => onEdit(exam)} // Trigger edit
                >
                  Sửa
                </button>
                <button
                  className="rounded bg-yellow-500 px-4 py-1 text-white"
                  onClick={() => handleDelete(exam.id)} // Trigger delete
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
