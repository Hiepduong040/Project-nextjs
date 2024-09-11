"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSubjectsByCourse } from "../../../../../services/subject.service";
import Link from "next/link";

interface Subject {
  id: string;
  title: string;
}

export default function CourseDetailPage() {
  const { courseId } = useParams<{ courseId: string | string[] }>(); 
  const [subjects, setSubjects] = useState<Subject[]>([]);

  useEffect(() => {
    if (typeof courseId === "string") {
      // When courseId is a single string
      getSubjectsByCourse(courseId).then(setSubjects);
    } else if (Array.isArray(courseId)) {
      // When courseId is an array, handle the first element or your specific use case
      const firstCourseId = courseId[0];
      if (firstCourseId) {
        getSubjectsByCourse(firstCourseId).then(setSubjects);
      }
    }
  }, [courseId]);

  if (!subjects.length) return <div>Loading...</div>;

  return (
    <div>
      <h1>Môn học thuộc khóa</h1>
      <ul>
        {subjects.map((subject) => (
          <li key={subject.id}>
            <Link href={`/subjects/${subject.id}`}>{subject.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
