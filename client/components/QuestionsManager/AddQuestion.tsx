import React, { useState, useEffect } from "react";
import { Question } from "../../interfaces/interfaces";
import { addQuestion, updateQuestion } from "../../services/question.service";

export default function AddQuestion({
  onQuestionAdded,
  editQuestion,
}: {
  onQuestionAdded: () => void;
  editQuestion?: Question; // Use undefined instead of null
}) {
  const [questionText, setQuestionText] = useState(
    editQuestion?.question || "",
  );
  const [examId, setExamId] = useState<number | undefined>(
    editQuestion?.examId,
  );
  const [options, setOptions] = useState(editQuestion?.options || [""]);
  const [answer, setAnswer] = useState(editQuestion?.answer || "");

  useEffect(() => {
    if (editQuestion) {
      setQuestionText(editQuestion.question);
      setExamId(editQuestion.examId);
      setOptions(editQuestion.options);
      setAnswer(editQuestion.answer);
    }
  }, [editQuestion]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const questionData = {
      question: questionText,
      examId: examId !== undefined ? examId : 0, // Ensure examId is a number
      options,
      answer,
    };

    try {
      if (editQuestion) {
        await updateQuestion(editQuestion.id, questionData);
      } else {
        await addQuestion(questionData);
      }
      onQuestionAdded();
    } catch (error) {
      console.error("Error submitting question", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl">
        {editQuestion ? "Sửa câu hỏi" : "Thêm câu hỏi"}
      </h2>
      <div className="mb-4">
        <label className="mb-2 block">Câu hỏi</label>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          required
          className="border-gray-300 w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Mã đề thi</label>
        <input
          type="number"
          value={examId || ""}
          onChange={(e) => setExamId(parseInt(e.target.value))}
          required
          className="border-gray-300 w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Đáp án</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          className="border-gray-300 w-full rounded border p-2"
        />
      </div>
      <button
        type="submit"
        className="rounded bg-blue-500 px-4 py-2 text-white"
      >
        {editQuestion ? "Cập nhật câu hỏi" : "Thêm câu hỏi"}
      </button>
    </form>
  );
}
