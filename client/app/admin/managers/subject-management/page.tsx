// add task #12217, #12218, #12219, #12220
"use client";
import { useEffect, useState } from "react";
import DefaultLayout from "../../../../components/Layouts/DefaultLayout";
import AddSubject from "../../../../components/SubjectManager/AddSubject";
import TableSubject from "../../../../components/SubjectManager/TableSubject";

import {
  getSubject,
  addSubject,
  updateSubject,
  deleteSubject,
} from "../../../../services/subject.service";
import { getCourses } from "../../../../services/courses.service";

interface Course {
  id: number;
  title: string;
  description: string;
}

interface Subject {
  id: number;
  title: string;
  description: string;
  coursesId: number;
}

export default function SubjectManager() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [editingSubject, setEditingSubject] = useState<Subject | null>(null);

  useEffect(() => {
    fetchSubjects();
    fetchCourses();
  }, []);

  const fetchSubjects = async () => {
    const data = await getSubject();
    setSubjects(data);
  };

  const fetchCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleSubjectAdded = async (newSubject: {
    title: string;
    description: string;
    coursesId: number;
  }) => {
    await addSubject(newSubject);
    fetchSubjects();
  };

  const handleSubjectUpdated = async (
    id: number,
    updatedData: { title: string; description: string; coursesId: number },
  ) => {
    await updateSubject(id, updatedData);
    fetchSubjects();
    setEditingSubject(null);
  };

  const handleEditSubject = (subject: Subject) => {
    setEditingSubject(subject);
  };

  const handleDeleteSubject = async (id: number) => {
    await deleteSubject(id);
    fetchSubjects();
  };

  return (
    <DefaultLayout>
      <h1 className="mb-4 text-2xl font-bold">Subject Manager</h1>
      <TableSubject
        subjects={subjects}
        onEditSubject={handleEditSubject}
        onDeleteSubject={handleDeleteSubject}
        courses={courses}
      />
      <AddSubject
        onSubjectAdded={handleSubjectAdded}
        editingSubject={editingSubject}
        onSubjectUpdated={handleSubjectUpdated}
        courses={courses}
      />
    </DefaultLayout>
  );
}
