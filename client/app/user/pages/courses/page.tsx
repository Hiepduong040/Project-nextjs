"use client";
import React, { useEffect, useState } from "react";
import { getCourses } from "../../../../services/courses.service";
import Link from "next/link";

interface Course {
  id: string;
  title: string;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses().then(setCourses);
  }, []);

  return (
    <div>
      <h1>Danh sách khóa học</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/courses/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
      <Link href="/courses/add">Thêm khóa học mới</Link>
    </div>
  );
}
