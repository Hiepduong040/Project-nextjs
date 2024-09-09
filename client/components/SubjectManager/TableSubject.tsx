import React from "react";

// Define the props for TableSubject
interface TableSubjectProps {
  subjects: {
    id: number;
    title: string;
    description: string;
    coursesId: number;
  }[];
  onEditSubject: (subject: any) => void;
  onDeleteSubject: (id: number) => void;
  courses: { id: number; title: string }[]; // Pass the courses to this component
}

export default function TableSubject({
  subjects,
  onEditSubject,
  onDeleteSubject,
  courses,
}: TableSubjectProps) {
  // Function to get course title based on coursesId
  const getCourseTitle = (coursesId: number) => {
    const course = courses.find((course) => course.id === coursesId);
    return course ? course.title : "Unknown Course"; // Return course title or a default value
  };

  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Course</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {subjects.map((subject) => (
          <tr key={subject.id}>
            <td className="border px-4 py-2">{subject.id}</td>
            <td className="border px-4 py-2">{subject.title}</td>
            <td className="border px-4 py-2">{subject.description}</td>
            <td className="border px-4 py-2">
              {getCourseTitle(subject.coursesId)}{" "}
              {/* Display the course title */}
            </td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onEditSubject(subject)}
                className="mr-2 rounded bg-green-500 px-2 py-1 text-white"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteSubject(subject.id)}
                className="bg-yellow-500 rounded px-2 py-1 text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
