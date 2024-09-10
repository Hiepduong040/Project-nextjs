"use client"
import React, { useState } from "react";
import DefaultLayout from "../../../../components/Layouts/DefaultLayout";
import AddExam from "../../../../components/ExamsManager/AddExams";
import TableExams from "../../../../components/ExamsManager/TableExams";
import { Exam } from "../../../../interfaces/interfaces";

export default function ExamsManager() {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [editExam, setEditExam] = useState<Exam | undefined>(undefined); // Set the initial state to undefined

  const handleExamAdded = () => {
    setRefresh(!refresh); // Toggle state to trigger refresh
    setEditExam(undefined); // Reset edit after adding or updating
  };

  const handleEdit = (exam: Exam) => {
    setEditExam(exam); // Set the exam to be edited
  };

  return (
    <DefaultLayout>
      <h1 className="mb-6 text-xl font-semibold">Quản lý đề thi</h1>
      <TableExams refresh={refresh} onEdit={handleEdit} /> {/* Pass onEdit */}
      <AddExam onExamAdded={handleExamAdded} editExam={editExam} />{" "}
      {/* Pass editExam */}
    </DefaultLayout>
  );
}
