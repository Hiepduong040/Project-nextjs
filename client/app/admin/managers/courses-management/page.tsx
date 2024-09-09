"use client"
import React, { useState, useEffect } from "react";
import DefaultLayout from "../../../../components/Layouts/DefaultLayout";
import TableCourses from "../../../../components/CoursesManager/TableCourses";
import AddCourses from "../../../../components/CoursesManager/AddCourses";
import { getCourses } from "../../../../services/courses.service";

export default function CoursesManager() {
  const [courses, setCourses] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCourses = async () => {
    try {
      const data = await getCourses();
      const coursesPerPage = 4;
      const startIndex = (currentPage - 1) * coursesPerPage;
      const paginatedCourses = data.slice(
        startIndex,
        startIndex + coursesPerPage,
      );

      setCourses(paginatedCourses);
      setTotalPages(Math.ceil(data.length / coursesPerPage));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCourseAdded = () => {
    fetchCourses(); // Làm mới danh sách khóa học
  };

  const handleCourseDeleted = () => {
    fetchCourses(); // Làm mới danh sách khóa học sau khi xóa
  };

  const handleCourseUpdated = () => {
    fetchCourses(); // Làm mới danh sách khóa học sau khi cập nhật
  };

  return (
    <DefaultLayout>
      <h1 className="mb-4 text-2xl font-bold">Courses Manager</h1>
      <TableCourses
        courses={courses}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onCourseDeleted={handleCourseDeleted}
        onCourseUpdated={handleCourseUpdated}
      />
      <AddCourses onCourseAdded={handleCourseAdded} />
    </DefaultLayout>
  );
}
