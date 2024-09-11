import React, { useState, useEffect } from "react";
import { Question } from "../../interfaces/interfaces";
import { addQuestion, updateQuestion } from "../../services/question.service";
import { getExams } from "../../services/exam.service"; // Service to fetch exams

export default function AddQuestion({
  onQuestionAdded,
  editQuestion,
}: {
  onQuestionAdded: () => void;
  editQuestion?: Question;
}) {
  const [questionText, setQuestionText] = useState(
    editQuestion?.question || "",
  );
  const [examId, setExamId] = useState<number | undefined>(
    editQuestion?.examId,
  );
  const [options, setOptions] = useState<string[]>(
    editQuestion?.options || ["", "", "", ""],
  );
  const [answer, setAnswer] = useState(editQuestion?.answer || "");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [exams, setExams] = useState<{ id: number; title: string }[]>([]); // List of exams

  useEffect(() => {
    // Fetch exams when the component mounts
    const fetchExams = async () => {
      try {
        const response = await getExams(); // Fetch exams from the service
        setExams(response);
      } catch (error) {
        console.error("Error fetching exams", error);
      }
    };

    fetchExams();
  }, []);

  useEffect(() => {
    if (editQuestion) {
      setQuestionText(editQuestion.question);
      setExamId(editQuestion.examId);
      setOptions(
        editQuestion.options.length === 4
          ? editQuestion.options
          : ["", "", "", ""],
      );
      setAnswer(editQuestion.answer);
    }
  }, [editQuestion]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation: Ensure all options are filled
    if (options.some((option) => option.trim() === "")) {
      setErrorMessage("Tất cả các tùy chọn phải được điền.");
      return;
    }

    // Validation: Ensure answer is one of the options
    if (!options.includes(answer)) {
      setErrorMessage("Đáp án phải là một trong các tùy chọn.");
      return;
    }

    // Validation: Ensure examId is present
    if (examId === undefined) {
      setErrorMessage("Vui lòng chọn một đề thi hợp lệ.");
      return;
    }

    const questionData = { question: questionText, examId, options, answer };

    try {
      if (editQuestion) {
        await updateQuestion(editQuestion.id, questionData);
      } else {
        await addQuestion(questionData);
      }

      // Clear inputs after successful add/update
      setQuestionText("");
      setExamId(undefined);
      setOptions(["", "", "", ""]);
      setAnswer("");

      // Trigger parent refresh and clear edit state
      onQuestionAdded();
    } catch (error) {
      console.error("Error submitting question", error);
    }
  };

  const handleOptionChange = (value: string, index: number) => {
    const updatedOptions = options.map((option, i) =>
      i === index ? value : option,
    );
    setOptions(updatedOptions);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-md bg-white p-4 shadow-md">
      <h2 className="mb-4 text-xl">
        {editQuestion ? "Sửa câu hỏi" : "Thêm câu hỏi"}
      </h2>
      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
      <div className="mb-4">
        <label className="mb-2 block">Câu hỏi</label>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          required
          className="border-gray-300 w-full  rounded border p-2"
          placeholder="Nhập câu hỏi"
        />
      </div>

      {/* Exam Dropdown */}
      <div className="mb-4">
        <label className="mb-2 block">Đề thi</label>
        <select
          value={examId ?? ""}
          onChange={(e) => setExamId(parseInt(e.target.value))}
          required
          className="border-gray-300 w-full rounded border p-2"
        >
          <option value="">Chọn đề thi</option>
          {exams.map((exam) => (
            <option key={exam.id} value={exam.id}>
              {exam.title}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Options with Validation */}
      <div className="mb-4">
        <label className="mb-2 block">Đáp án</label>
        {options.map((option, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(e.target.value, index)}
              required
              className="border-gray-300 mr-2 w-full rounded border p-2"
              placeholder="Nhập các đáp án"
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="mb-2 block">Đáp án đúng</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          className="border-gray-300 w-full rounded border p-2"
          placeholder="Nhập đáp án đúng"
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
