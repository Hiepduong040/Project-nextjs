import React, { useEffect, useState } from "react";
import { getQuestions, deleteQuestion } from "../../services/question.service";
import { Question } from "../../interfaces/interfaces";

interface TableQuestionsProps {
  refresh: boolean;
  onEdit: (question: Question) => void;
}

export default function TableQuestions({
  refresh,
  onEdit,
}: TableQuestionsProps) {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions", error);
      }
    };
    fetchQuestions();
  }, [refresh]);

  const handleDelete = async (id: number) => {
    try {
      await deleteQuestion(id);
      setQuestions(questions.filter((question) => question.id !== id));
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
            <th className="border-b py-2">Đáp án</th>
            <th className="border-b py-2">Mã đề thi</th>
            <th className="border-b py-2">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question) => (
            <tr key={question.id}>
              <td className="border-b py-2 text-center">{question.id}</td>
              <td className="border-b py-2">{question.question}</td>
              <td className="border-b py-2">{question.answer}</td>
              <td className="border-b py-2 text-center">{question.examId}</td>
              <td className="border-b py-2 text-center">
                <button
                  className="mr-2 rounded bg-blue-500 px-4 py-1 text-white"
                  onClick={() => onEdit(question)}
                >
                  Sửa
                </button>
                <button
                  className="bg-yellow-500 rounded px-4 py-1 text-white"
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
