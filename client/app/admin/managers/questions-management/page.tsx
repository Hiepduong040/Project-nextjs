"use client"
import React, { useState } from "react";
import DefaultLayout from "../../../../components/Layouts/DefaultLayout";
import AddQuestion from "../../../../components/QuestionsManager/AddQuestion";
import TableQuestions from "../../../../components/QuestionsManager/TableQuestion";
import { Question } from "../../../../interfaces/interfaces"; // Import interface

export default function QuestionsManager() {
  const [refresh, setRefresh] = useState(false);
  const [editQuestion, setEditQuestion] = useState<Question | undefined>(
    undefined,
  ); // Use undefined instead of null

  const handleQuestionAdded = () => {
    setRefresh(!refresh);
    setEditQuestion(undefined); // Clear after add/update
  };

  const handleEdit = (question: Question) => {
    setEditQuestion(question);
  };

  return (
    <DefaultLayout>
      <h1 className="mb-6 text-xl font-semibold">Quản lý câu hỏi</h1>
      <TableQuestions refresh={refresh} onEdit={handleEdit} />
      <AddQuestion
        onQuestionAdded={handleQuestionAdded}
        editQuestion={editQuestion}
      />
    </DefaultLayout>
  );
}
