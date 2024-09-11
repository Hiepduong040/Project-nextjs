import React, { useEffect, useState } from "react";
import { deleteQuestion, getQuestions } from "../../services/question.service"; // Update path as needed
import { getExams } from "../../services/exam.service"; // Assuming this service exists
import { Question } from "../../interfaces/interfaces"; // Import the Question interface

interface TableQuestionsProps {
  refresh: boolean;
  onEdit: (question: Question) => void; // Prop to trigger edit
}

export default function TableQuestions({
  refresh,
  onEdit,
}: TableQuestionsProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [exams, setExams] = useState<{ [id: number]: string }>({}); // {examId: title}

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch questions
        const questionsResponse = await getQuestions();
        setQuestions(questionsResponse);

        // Fetch Tùy chọn
        const examsResponse = await getExams();
        // Create a mapping of examId to exam title
        const examMap = examsResponse.reduce(
          (acc: { [id: number]: string }, exam:any  ) => {
            acc[exam.id] = exam.title;
            return acc;
          },
          {},
        );
        setExams(examMap);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [refresh]);

  const handleDelete = async (id: number) => {
    try {
      await deleteQuestion(id);
      alert("Question deleted successfully!");
      setQuestions(questions.filter((q) => q.id !== id));
    } catch (error) {
      console.error("Error deleting question", error);
    }
  };

  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl">Danh sách câu hỏi</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="border-b py-2">ID</th>
            <th className="border-b py-2">Câu hỏi</th>
            <th className="border-b py-2">Đề thi</th>{" "}
            {/* Updated column for exam title */}
            <th className="border-b py-2">Các đáp án</th>
            <th className="border-b py-2">Đáp án đúng</th>
            <th className="border-b py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td className="border-b py-2 text-center">{question.id}</td>
              <td className="border-b py-2 text-center">{question.question}</td>
              <td className="border-b py-2 text-center">
                {exams[question.examId] || "Unknown Exam"}{" "}
                {/* Display exam title */}
              </td>
              <td className="border-b py-2 text-center">
                {question.options.join(", ")}
              </td>
              <td className="border-b py-2 text-center">{question.answer}</td>
              <td className="border-b py-2 text-center">
                <button
                  className="mr-2 rounded bg-blue-500 px-4 py-1 text-white"
                  onClick={() => onEdit(question)}
                >
                  Sửa
                </button>
                <button
                  className="rounded bg-yellow-500 px-4 py-1 text-white"
                  onClick={() => handleDelete(question.id)}
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
